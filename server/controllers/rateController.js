const { Rate } = require('../models');
var methods = {};

methods.addRate = (req, res) => {
    req.body.movieId = parseInt(req.params.movieId);

    if (req.body.point > 100 || req.body.point < 0) {
        return res.status(400).json({
            message: 'point can only between 0 - 100'
        });
    }

    Rate.create(req.body)
    .then(rate => {
        res.status(200).json(rate);
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    });
}

module.exports = methods;