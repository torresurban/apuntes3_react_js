import React, { useState } from 'react'
import './General.css'

const TareaForm = (props) => {
  const [text, setText] = useState('')
  const [validacion, setValidacion] = useState(true)

  const manejarTexto = (e) => {
    //console.log(e.target.value)
    setText(e.target.value)
    //console.log(text)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim() !== ''){
      props.nuevaTarea(text)
      setText('')
      setValidacion(true)
    }else{
      setValidacion(false)
    }
  }


  return (
    <div>
        <h2>Lista de Tareas</h2>
        <form className='form' onSubmit={handleSubmit}>
                <span>Añadir tarea</span>
                <input
                  type='text'
                  value={text}
                  onChange={manejarTexto}
                />
                <button>Añadir</button>
        </form>
        {
          !validacion && <div className='validacion'>Añada una nueva tarea, porfavor</div>
        }
    </div>
  )
}

export default TareaForm