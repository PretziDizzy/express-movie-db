const {sequelize, DataTypes, Model} = require('../db')

class Cast extends Model {}

Cast.init({
    castName: DataTypes.STRING,
    characterName: DataTypes.STRING,
    placeOfOrigin: DataTypes.STRING,
},
{
    sequelize,
    timestamps: false
})

module.exports = {Cast}