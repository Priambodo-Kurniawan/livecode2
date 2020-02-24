'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      "title": "Batman Begins",
      "year": "2005",
      "imdbID": "tt0372784",
      "type": "movie",
      "poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "title": "Gotham",
      "year": "2014",
      "imdbID": "tt3749900",
      "type": "series",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTU5NjQ2MTU4NV5BMl5BanBnXkFtZTgwOTYyNTAwNzM@._V1_SY1000_SX800_AL_.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "title": "Smallville",
      "year": "2001",
      "imdbID": "tt0279600",
      "type": "series",
      "poster": "https://m.media-amazon.com/images/M/MV5BYmNiNzlhOWItMDM5Mi00MGYzLWI1ZDYtNmI5NzI0MWFkMTIwXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SY1000_CR0,0,722,1000_AL_.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "title": "Batman v Superman: Dawn of Justice",
      "year": "2016",
      "imdbID": "tt2975590",
      "type": "movie",
      "poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "title": "Batman",
      "year": "1989",
      "imdbID": "tt0096895",
      "type": "movie",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "title": "Batman Returns",
      "year": "1992",
      "imdbID": "tt0103776",
      "type": "movie",
      "poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
