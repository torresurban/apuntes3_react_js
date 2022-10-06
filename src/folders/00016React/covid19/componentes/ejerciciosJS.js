class Persona{
    constructor(nombre){
        this.nombre=nombre
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const tommy = new Persona('Tommy')
console.log(tommy)

function crearPersona(nombre){

    return{
        nombre,
        saludar(){
            console.log(`Hola, me llamo ${this.nombre}`)
    }}
}

const meggy = crearPersona('Meggy')
console.log(meggy)