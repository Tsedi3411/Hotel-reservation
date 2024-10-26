
const Reservation = require("./Reservation");
const Room = require("./Room");
const User = require("./User");



function Relations(){
  User.belongsToMany(Room,{through: Reservation})  
  Room.belongsToMany(User,{through:Reservation})
}

module.exports=Relations