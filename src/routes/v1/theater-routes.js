const express = require('express');
const {TheaterController} = require('../../controllers');

const router = express.Router();

router.get('/',TheaterController.getAllTheaters);
router.get('/:theaterId/dates',TheaterController.getDatesForTheater);
router.get('/:theaterId/movies',TheaterController.getMoviesForTheater);
module.exports = router;