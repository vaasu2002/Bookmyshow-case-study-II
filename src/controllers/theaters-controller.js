const { TheaterService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

const redisClient = require('../config/redis');


async function getAllTheaters(req, res) {
  try {
    const cacheKey = 'AllTheaters';
    const cachedData = await redisClient.get(cacheKey);
    if(cachedData){
    const theaters = JSON.parse(cachedData);
      SuccessResponse.data = theaters;
      return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    const theaters = await TheaterService.getAllTheaters();
    await redisClient.setEx(cacheKey,304200,JSON.stringify(theaters)); // expire in 3.5 days
    SuccessResponse.data = theaters;
    return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
  }
}

async function getDatesForTheater(req, res){
    try{
        const cacheKey = 'dateForTheater'+req.params.theaterId;
        const cachedData = await redisClient.get(cacheKey);
        if(cachedData){
            const theaters = JSON.parse(cachedData);
              SuccessResponse.data = theaters;
              return res
                        .status(StatusCodes.OK)
                        .json(SuccessResponse);
        }
        const dates = await TheaterService.getDatesForTheater({
            theaterId:req.params.theaterId
        });
        SuccessResponse.data = dates;
        await redisClient.setEx(cacheKey, 43200,JSON.stringify(dates)); // expire in 12 hours
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
        const cacheKey = 'MoviesForTheater'+req.params.theaterId+req.query.date;
        const cachedData = await redisClient.get(cacheKey);
        if(cachedData){
            const theaters = JSON.parse(cachedData);
              SuccessResponse.data = theaters;
              return res
                        .status(StatusCodes.OK)
                        .json(SuccessResponse);
        }
        const movies = await TheaterService.getMoviesForTheater({
            theaterId:req.params.theaterId,
            date:req.query.date
        });
        SuccessResponse.data = movies;
        await redisClient.setEx(cacheKey, 43200,JSON.stringify(movies)); // expire in 12 hours
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