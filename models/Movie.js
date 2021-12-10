const {sequelize, DataTypes, Model} = require('../db')

class Movie extends Model {}

Movie.init({
    title: DataTypes.STRING,
    runningTime: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    MPAA_rating: DataTypes.STRING,
    IMDB_rating: DataTypes.DECIMAL(1,1),
},
{
    sequelize,
    timestamps: false
})

module.exports = {Movie}