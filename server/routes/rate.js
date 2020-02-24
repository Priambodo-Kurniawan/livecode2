var express = require('express');
var router = express.Router();
const rate = require('../controllers/rateController');

// post rate by movieId
router.post('/:movieId', rate.addRate);

// delete rate by movieId
router.delete('/:movieId', rate.deleteRate);

module.exports = router;