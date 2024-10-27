

const express = require('express')
const app = express()

const database = require('./database')
const relations = require('./models/relarions')
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Room = require('./models/Room')
const Reservation = require('./models/Reservation')
const cors=require('cors')

relations()
database.sync()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors('localhost:300'))
//for localhost 3000 only if empyty for every port

//accepting users
app.post('/register', async (req, res) => {
    const { email, password, first_name, last_name } = req.body
    console.log(req.body)
    await User.create({
        email: email,
        password: bcrypt.hashSync(password),
        first_name: first_name,
        last_name: last_name
    })
    res.json({ success: true })
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({
        where: {
            email: email
        }
    })
    //if the user is not found which means email is incorrect
    if (!user) return res.json({ success: false })
    //check if the password in incorrect
    let correct = bcrypt.compareSync(password, user.password)
    // if the passworfd is incorrect send false responcce
    if (!correct) return res.json({ success: false })
    let token = jwt.sign(user.id, 'secret4321')
    res.json({ success: true, token: token })
})

app.post('/create-room', async (req, res) => {
    const { code, type, level, package, price } = req.body
    await Room.create({
        code, type, level, package, price
    })
    res.json({ success: true })//success responce
})

app.get('/all-rooms', async (req, res) => {
    let rooms = await Room.findAll({
        order: [['createdAt', 'desc']]
    })
    res.json(rooms)//giving all rooms as a responce
})

app.post('/reserve', async (req, res) => {
    //accespting userInput
    const { roomId, date, duration } = req.body
    //find the roomId
    let room = await Room.findByPk(roomId)
    //if the room is not found give false responce
    if (!roomId) return res.json({ success: false })
        //get the token from authorization header
    let token = req.headers['authorization'].split(' ')[1]
    //if token id not found give false responce
    if (!token) return ({ success: false })
        //decrypt back the userId from the token
    let userId = jwt.verify(token, 'secret4321')
    //create a reservation record inside reservation table
    //let user = await User.findByPk(userId)
    await Reservation.create({
        date:date, 
        duration:duration,
        roomId:roomId,
        userId:userId
    })
  res.json({success:true})

})

app.get('/all-reserves', async(req, res)=>{
    let reserves=await Reservation.findAll()
    res.json(reserves)
})






app.listen(4000, () => console.log('server is runing on port 4000'))