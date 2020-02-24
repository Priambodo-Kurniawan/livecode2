const { Movie } = require('../models');
var methods = {};

methods.getAll = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.status(200).json({
          movies
        });
    })
    .catch(err => next(err));
}

module.exports = methods;