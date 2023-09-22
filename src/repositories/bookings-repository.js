const { StatusCodes } = require('http-status-codes');
const { Op } = require("sequelize");

const { Booking } = require('../models');
const CrudRepository = require('./crud-repository');


class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking);
    }

    async createBooking(data, transaction) {
        try{
            const response = await this.create(data, {transaction: transaction});
            return response;
        }catch(error){
            throw error;
        }
        
    } 
}

module.exports = BookingRepository;