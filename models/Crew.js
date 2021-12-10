const {sequelize, DataTypes, Model} = require('../db')

class Crew extends Model {}

Crew.init({
    crewName: DataTypes.STRING,
    role: DataTypes.STRING,
    workEx: DataTypes.INTEGER,
    isOnsite: DataTypes.BOOLEAN,
},
{
    sequelize,
    timestamps: false
})

module.exports = {Crew}