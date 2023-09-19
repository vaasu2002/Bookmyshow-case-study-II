const express = require('express');

const { InfoController } = require('../../controllers');
const TheaterRoutes = require('./theater-routes');
const router = express.Router();

router.get('/info', InfoController.info);
router.use('/theaters',TheaterRoutes);
module.exports = router;