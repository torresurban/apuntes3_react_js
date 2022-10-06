import React, { useState } from 'react'
import '../../src/folders/00016React/TodoApp/General.css'
import TareaForm from '../folders/00016React/TodoApp/TareaForm'
import Tareas from '../folders/00016React/TodoApp/Tareas'

const App00016todo = () => {
  const [listaTarea, setListaTarea] = useState([])

  const nuevaTarea = (tarea) => {
    setListaTarea([tarea, ...listaTarea])
  }

  const borrarTarea = (id) => {
    const listaNueva = listaTarea.filter((e, index) => index !== id)
    setListaTarea(listaNueva)
  }

  const actualizarTarea = (id2, tarea2) => {
    const listaActualizada = listaTarea.map((e, index) => {
      if(index === id2){
        e = tarea2
      }
      return e
    })

    setListaTarea(listaActualizada)
  }

  console.log(listaTarea)

  return (
    <div>
        <h1>Todo App</h1>
        <hr />
        <TareaForm
          nuevaTarea={nuevaTarea}
         />
         <div className='lista'>
         {
          listaTarea.map((e, index) => <Tareas
                                            key={index}
                                            tarea={e}
                                            borrar={borrarTarea}
                                            id={index}
                                            editar={actualizarTarea}
                                        />)
         }
         </div>

    </div>
  )
}

export default App00016todo