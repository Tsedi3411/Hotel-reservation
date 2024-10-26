

const { DataTypes } = require('sequelize')
const database= require('../database')

const Reservation=database.define('reservation',{
   date:DataTypes.DATE,
   duration:DataTypes.INTEGER
})
module.exports= Reservation