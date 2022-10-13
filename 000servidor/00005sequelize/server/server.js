const express = require('express')
const morgan = require('morgan')
const clubRoutes = require('../routes/clubs.routes')
const playerRoutes = require('../routes/players.routes')
const teamRoutes = require('../routes/equipo.routes')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//RUTAS
app.use('/clubs', clubRoutes)
app.use('/players', playerRoutes)
app.use('/team', teamRoutes)

module.exports = app