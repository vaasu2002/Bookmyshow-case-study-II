const {StatusCodes} = require('http-status-codes');

const { TheaterRepository,ShowRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const theaterRepository = new TheaterRepository();
const showRepository = new ShowRepository();


async function getAllTheaters(){
    try{
        
        const theaters = await theaterRepository.getAll();
        
        return theaters;
    }catch(error){
        throw new AppError('Cannot fetch data of all the theaters', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getDatesForTheater(data){
    let customFilter={};
    if(data.theaterId){
        customFilter.theaterId = data.theaterId;
    }
    try{
        const dates = await showRepository.getDatesForTheater(customFilter);
        return dates;
    }catch(error){
        throw new AppError('Cannot fetch data of all the theaters', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getMoviesForTheater(data){
    
    let customFilter={};
    if(data.theaterId){
        customFilter.theaterId = data.theaterId;
    }
    if(data.date){
        customFilter.date = data.date;
    }
    try{
        const movies = await showRepository.getMoviesForTheater(customFilter);
        return movies;
    }catch(error){
        throw new AppError('Cannot fetch data of all the theaters', StatusCodes.INTERNAL_SERVER_ERROR);
    }   
}


module.exports = {
    getAllTheaters,
    getDatesForTheater,
    getMoviesForTheater,
}