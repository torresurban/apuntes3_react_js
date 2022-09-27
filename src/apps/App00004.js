import React from 'react'
import ComponenteClass2 from '../folders/00004componentes/componentes/ComponenteClass2'
import ComponenteFuncional from '../folders/00004componentes/componentes/ComponenteFuncional'
import ComponentesClases from '../folders/00004componentes/componentes/Componentes.Class'
import PropiedadesFuncional from '../folders/00004componentes/props-propiedades/PropiedadesFuncional'
import PropsClass from '../folders/00004componentes/props-propiedades/PropsClass'

const App00004 = () => {
  const datos = {
    nombre:'Belen',
    apellido:'Pozo'
  }
  return (
    <div>
        <h1>Componentes</h1>
        <hr />
        <ComponentesClases />
        <hr />
        <ComponenteClass2 mensaje={'Mensaje recibido a traves de una propiedad del componente'}/>
        <hr />
        <ComponenteFuncional msj={'Mensaje desde props en un componente funcional'}/>
        <hr />
        <PropiedadesFuncional
            cadena='Esto es una cadena'
            numero={9}
            bolean={true}
            arreglo={[1,2,3]}
            objeto={{nombre:'Tommy', correo:'tommy@torres.com'}}
            funcion={num => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<ComponenteFuncional msj='Soy un componente pasado como props'/>}
        />
        <hr />
        <PropsClass />
        <hr />
        <PropsClass {...datos}/>
        <hr />
        <PropsClass nombre='Rebelde'/>
    </div>
  )
}

export default App00004