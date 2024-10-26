

const { DataTypes } = require('sequelize')
const database = require('../database')


const Room = database.define('room', {
    code:DataTypes.STRING,
    type:DataTypes.STRING,
    level:DataTypes.INTEGER,
    price:DataTypes.DECIMAL,
    package:DataTypes.TEXT
    
})


module.exports= Room
