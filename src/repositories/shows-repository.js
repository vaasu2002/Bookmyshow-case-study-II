const CrudRepository = require('./crud-repository');
const { Show,Movie,Language } = require('../models');
const Sequelize = require('sequelize');
const db = require('../models');

class ShowRepository extends CrudRepository{
    constructor(){
        super(Show);
    }
    async getDatesForTheater(filter){
        try{
            const response = await Show.findAll({
                where:filter,
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('date')), 'date'],
                ],
            });
            return response;
        }catch(error){
            throw new AppError('Cannot fetch data of all the dates', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async getMoviesForTheater(filter){
        try{
            const response = await Show.findAll({
                where:filter,
                attributes: ['time'],
                include: [
                    {
                      model: Movie,
                      as:'movieDetails',
                      attributes: ['movieName'],
                    },
                    {
                        model: Language,
                        as:'languageDetails',
                        attributes: ['languageName'],
                    },
                ],
            });
            return response;
        }catch(error){
            console.log(error);
            throw new AppError('Cannot fetch data of all the movies', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    addRowLockOnFlights(showId) {
        return `SELECT * from Shows WHERE Shows.id = ${showId} FOR UPDATE;`
    }

    async updateRemainingSeats(showId, seats,decrement = true){
        const transaction = await db.sequelize.transaction();
        try{
            
            await db.sequelize.query(this.addRowLockOnFlights(showId))
            const show = await Show.findByPk(showId);
            if(+decrement) {
                
                await show.decrement('totalSeatsLeft', {by: seats}, {transaction: transaction});
            } else {
                await show.increment('totalSeatsLeft', {by: seats}, {transaction: transaction});
            }
            await transaction.commit();
            return show;

        }catch(error){
            console.log(error);
            await transaction.rollback();
            throw new AppError('Cannot update remaining seats', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = ShowRepository;