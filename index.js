const {sequelize, DataTypes, Model} = require('./db');

const { Cast } = require('./models/Cast');
const { Crew } = require('./models/Crew');
const { Movie } = require('./models/Movie');


Movie.hasMany(Cast)
Cast.belongsTo(Movie)

Movie.hasMany(Crew)
Crew.belongsTo(Movie)

module.exports = {Cast, Crew, Movie, sequelize}
