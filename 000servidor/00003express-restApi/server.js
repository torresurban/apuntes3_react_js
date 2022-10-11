const express = require('express')
const morgan = require('morgan')

const app = express()

let productos = [
    {
        id:1,
        name:'laptop',
        precio:5000
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products', (req, res) => {
    //res.send('obteniendo productos')
    res.json(productos)
})

app.post('/products', (req, res) => {
    console.log({...req.body, id:productos.length + 1})
    const newProduct = {...req.body, id:productos.length + 1}
    productos.push(newProduct)
    console.log(newProduct)
    console.log(productos)
    res.send(newProduct)
})

app.put('/products/:id', (req, res) => {

    const newData = req.body //{name:'ddfdff', precio:1000}

    const productoFound = productos.find(e => e.id === parseInt(req.params.id))
    if(!productoFound) return res.status(404).json({
        message:'Producto no encontrado'
    })

    productos = productos.map(e => e.id === parseInt(req.params.id) ? {...e, ...newData} : e)
    console.log(productos)
    res.json({
        message:'Producto actualizado satisfactoriamente'
    })
})

app.delete('/products/:id', (req, res) => {
    const productoFound = productos.find(e => e.id === parseInt(req.params.id))
    if(!productoFound) return res.status(404).json({
        message:'Producto no encontrado'
    })
    productos = productos.filter(e => e.id !== parseInt(req.params.id))
    res.sendStatus(204)
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id)
    const productoFound = productos.find(e => e.id === parseInt(req.params.id))

    if(!productoFound) return res.status(404).json({
        message:'Producto no encontrado'
    })

    console.log(productoFound)
    res.send(productoFound)
})

app.listen(5000)
console.log(`Inicializando en el puerto ${5000}`)