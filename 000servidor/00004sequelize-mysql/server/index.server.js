const express = require('express')
const morgan = require('morgan')
const usersRoutes = require('../rutas/users.routes')
const charactersRoutes = require('../rutas/characters.routes')
const moviesRoutes = require('../rutas/movies.routes')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rutas
app.use('/users',usersRoutes)
app.use('/personajes', charactersRoutes)
app.use('/movies', moviesRoutes)

module.exports = app

