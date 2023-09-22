const {TheaterService} = require('../services')

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function getAllTheaters(req, res){
    try{
        
        const theaters = await TheaterService.getAllTheaters();
        SuccessResponse.data = theaters;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getDatesForTheater(req, res){
    try{
        const dates = await TheaterService.getDatesForTheater({
            theaterId:req.params.theaterId
        });
        SuccessResponse.data = dates;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getMoviesForTheater(req,res){
    try{
        const movies = await TheaterService.getMoviesForTheater({
            theaterId:req.params.theaterId,
            date:req.query.date
        });
        SuccessResponse.data = movies;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    getAllTheaters,
    getDatesForTheater,
    getMoviesForTheater,
}