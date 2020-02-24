var express = require('express');
var router = express.Router();
const movie = require('../controllers/movieController');

/* GET movies listing. */
router.get('/', movie.getAll);

// get movie by id
// router.get('/:id', movie.getmovieById);

// update movie
// router.put('/:id', movie.updatemovieById);

module.exports = router;