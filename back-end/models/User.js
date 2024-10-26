

const { DataTypes } = require('sequelize')
const database= require('../database')
const User=database.define('user',{
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    first_name:DataTypes.STRING,
    last_name:DataTypes.STRING
})
module.exports= User