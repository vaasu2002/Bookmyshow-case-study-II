const CrudRepository = require('./crud-repository');
const { Movie } = require('../models');


class MovieRepository extends CrudRepository{
    constructor(){
        super(Movie);
    }
    
}

module.exports = MovieRepository;