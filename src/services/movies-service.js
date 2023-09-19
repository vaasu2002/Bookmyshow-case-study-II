const {StatusCodes} = require('http-status-codes');

const { MovieRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const movieRepository = new MovieRepository();

async function getAllTheaters(){
    try{

    }catch(error){
        throw new AppError('Cannot fetch data of all the Theaters', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}