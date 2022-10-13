const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


module.exports = app