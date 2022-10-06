import React, { useState } from 'react'
import './General.css'

const Tareas = (props) => {
    const [modoEdit, setModoEdit] = useState(false)
    const [ediText, setEdiText] = useState('')

    const editar = () => {
      setModoEdit(true)
    }

    const manejarEdit = (e) => {
      setEdiText(e.target.value)
    }

    const borrarToDo = () => {
        props.borrar(props.id)
    }

    const submitEditar = (e) => {
      e.preventDefault()
      props.editar(props.id, ediText)
      setEdiText('')
      setModoEdit(false)
    }
  return (
    <div>
        {
          !modoEdit
        ?
        <div className='tarea'>
                <span>{props.tarea}</span>
                <span onClick={editar}>Editar</span>
                <span onClick={borrarToDo}>Borrar</span>
        </div>
        :
        <form className='formEdit' onSubmit={submitEditar}>
          <input
            type='text'
            value={ediText}
            onChange={manejarEdit}
          />
          <button>Guardar</button>
        </form>
        }
        
    </div>
  )
}

export default Tareas