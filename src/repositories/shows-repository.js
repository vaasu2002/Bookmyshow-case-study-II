const CrudRepository = require('./crud-repository');
const { Show,Movie,Language } = require('../models');
const Sequelize = require('sequelize');

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
}

module.exports = ShowRepository;