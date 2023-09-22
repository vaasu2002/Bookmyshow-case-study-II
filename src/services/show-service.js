const {StatusCodes} = require('http-status-codes');

const {  ShowRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');


const showRepository = new ShowRepository();


async function updateSeats(data) {
    try {
        const response = await showRepository.updateRemainingSeats(data.showId, data.seats, data.decrement);
        return response;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot update data of the show', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getShow(id) {
    try {
        const show = await showRepository.get(id);
        return show;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The show you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the show', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    updateSeats,
    getShow
}