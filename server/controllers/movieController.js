const { Movie, Rate } = require('../models');
var methods = {};

methods.getAll = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.status(200).json(movies);
    })
    .catch(err => res.status(500).json({message: err.message}));
}

methods.getmovieById = (req, res) => {
    Movie.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Rate,
            as: 'Rates', // specifies how we want to be able to access our joined rows on the returned data
        }],
    })
    .then(movie => {
        return res.status(200).json(movie);
    })
    .catch(err => res.status(500).json({message: err.message}));
}

methods.updatemovieById = (req, res) => {
    Movie.update(req.body, {
        where: {
            id: req.params.id
        },
        include: [{
            model: Rate,
            as: 'Rates', // specifies how we want to be able to access our joined rows on the returned data
        }],
    })
    .then(movie => {
        Movie.findOne({ where: { id: req.params.id }})
        .then(movie => {
            return res.status(200).json(movie);
        })
    })
    .catch(err => res.status(500).json({message: err.message}));
}

module.exports = methods;