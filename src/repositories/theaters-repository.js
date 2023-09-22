const CrudRepository = require('./crud-repository');
const { Theater } = require('../models');


class TheaterRepository extends CrudRepository{
    constructor(){
        super(Theater);
    }
}

module.exports = TheaterRepository;