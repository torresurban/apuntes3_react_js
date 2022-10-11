// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

//configuraciones
// app.set('case sensitive routing', true)
// app.set('appName', 'Express Course')
// app.set('port', 4000)


//middlewares
app.use(morgan('dev'))
//app.use(express.text())
app.use(express.json())
//app.use(express.urlencoded({extended:false}))//para formularios

//app.use(express.static('./public'))
//app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(__dirname + '/public'))
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.get('/note.txt', (req, res) => {
    res.send('Esto no es un archivo para leer')
})


// app.get('/search', (req, res) => {
//     res.send('aqui toy')
// })


app.listen(3000)
console.log(`Servidor on port ${3000}`)


//**************************************************************** */
//validacion
// app.use((req, res, next) => {
//     if(req.query.login === 'tommy@torres.pe'){
//         next()
//     }else{
//         res.send('No autorizado')
//     }
// })

// app.get('/dashboard', (req, res) => {
//     res.send('Dashboard page')
// })


//*************************************************************** */
//mi propio middleware aunque puedo descargar morgan
// app.use((req, res, next) => {
//     console.log('paso por aqui')
//     console.log(`Route: ${req.url} Metodo: ${req.method}`)

//     next()
// })
//*************************************************************************************************** */
// app.post('/user', (req, res) => {
//     console.log(req.body)
//     res.send('creando datos')
    
// })

// app.get('/hello/:user', (req, res) => {
//     console.log(req.params.user)
//     res.send(`Hola ${req.params.user}`)
// })

// app.get('/add/:x/:y', (req, res) => {
//     // console.log(req.params.x)
//     // console.log(req.params.y)
//     const { x, y } = req.params

//     // const result = parseInt(req.params.x )+ parseInt(req.params.y)
//     const result = parseInt(x)+ parseInt(y)

//     console.log(result)

//     res.send(`Results: ${result}`)
// })

// app.get('/user/:usuario/foto', (req, res) => {
//     //res.send(req.params.usuario)
//     if(req.params.usuario === 'tommy'){
//         res.sendFile('./static/index.html', {
//             root: __dirname
//         })
//     }else{
//         res.send(req.params.usuario)
//     }
// })

// app.get('/nombre/:name', (req,res) => {
//     console.log(req.query)
// })

// app.get('/search', (req,res) => {
//     console.log(req.query)
// })



//*************************************************************************************************** */

// app.get('/user', (req, res) => {
//     res.json({
//         "name":"Tommy",
//         "lastname":"five",
//         "edad":36,
//         "points":[1, 2, 3],
//         "address":{
//             "city":"lima",
//             "street":"alguna calle 123"
//         }
//     })
// })







// // app.get('/', (req, res) => {
// //     res.sendFile('./static/index.html', {
// //         root: __dirname
// //     })
// // })

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

// app.get('/productos', (req, res) => {
//     //consultar una base de datos
//     //procesar datos
//     //validar datos
//     res.send('lista de productos')
// })

// app.post('/productos', (req, res) => {
//     res.send('creando productos')
// })

// app.put('/productos', (req, res) => {
//     res.send('actualizando producto')
// })

// app.delete('/productos', (req, res) => {
//     res.send('eliminando producto')
// })

// app.patch('/productos', (req, res) => {
//     res.send('actualizando una parte del producto')
// })

// app.use((req, res) => {
//     res.status(404).send('Pagina no encontrada')
// })