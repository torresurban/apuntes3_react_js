# instalaciones `npm i sequelize` `npm mysql2`

## configurando las variables de entorno `.env` y carpeta `config`

### creando el servidor con express

carpeta `server`

### configurando conectividad de sequelize con la base de datos `index.sequelize.js`

importamos `const {Sequelize} = require('sequelize')`
importamos los datos de configaracion de las variables de entorno `const {data} = require('')`
`const {host, password, username, database, portdb} = data`
instanciamos sequelize
`const sequelize = new Sequelize(database, username, password, {host, dialect, port})`

### testeando la conectvidad `db.js`

Con `sequelize.authenticate()` testeamos la conectividad

### models `carpeta models`

`const {Datatypes} = require('sequelize')`
`const sequelize = require('ruta creada del servidor')`
`module.exports = sequelize('User', {aca van los atributos})`
Creamos las tablas

### sincronizacion `db.js`

sincronizamos los modelos(tablas) con la base de dato
`require('')` se require los modelos
`await sequelize.sync({force:true})` para la creacion de las tablas en la base de dato

### creamos los repositorios `carpeta repositorio`

se importa los modelos
`const User = require('aca va la ruta')`
creando la funcion, ejemplo:
`const getUsers = async() => return await User.findAll()`
