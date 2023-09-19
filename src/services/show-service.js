const {StatusCodes} = require('http-status-codes');

const {  ShowRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');


const showRepository = new ShowRepository();