const express = require('express')
const http = require('http')
//const cors = require('cors')

const app = express()
//app.use(cors())

const servidor= http.createServer(app)

const socketio = require('socket.io')
const io = socketio(servidor)

io.on('connection', socket => {
    let name;

    socket.on('conectado', (thename) => {
        name = thename
        socket.broadcast.emit('mensajes', {nombre:name, mensaje:`${name} ha entrado en la sala del chat`})
    })

    socket.on('mensaje', (nombre, mensaje) => {
        io.emit('mensajes', {nombre, mensaje})
    })

    socket.on('disconnect', () => {
        io.emit('mensajes', {servidor: 'Servidor', mensaje:`${name} abandonó la sala`})
    })
})

servidor.listen(4000, () => console.log('Servidor inicializado 👍👍👍'))