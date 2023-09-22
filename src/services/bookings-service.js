const {StatusCodes} = require('http-status-codes');

const { BookingRepository,ShowRepository } = require('../repositories');
const db = require('../models');
const AppError = require('../utils/errors/app-error');

const bookingRepository = new BookingRepository();
const showRepository = new ShowRepository();

async function createBooking(data) {
    const transaction = await db.sequelize.transaction();
    try {
        const showData = await showRepository.get(data.showId);
        
        if(data.noofSeats > showData.totalSeats) {
            throw new AppError('Not enough seats available', StatusCodes.BAD_REQUEST);
        }

        const totalBillingAmount = data.noofSeats * showData.price;
        const bookingPayload = {...data, totalCost: totalBillingAmount};
        const booking = await bookingRepository.createBooking(bookingPayload, transaction);
        // update seats
        const seatUpdates = await showRepository.updateRemainingSeats(data.showId,data.noofSeats);
        console.log('1' ,seatUpdates)
        await transaction.commit();
        console.log('2',seatUpdates)
        return booking;
    } catch(error){
        await transaction.rollback();
        throw error;
    }
}


module.exports = {
    createBooking,
}