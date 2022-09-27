import React, { useState } from 'react'
import Notes from './Notes'




const Renderizado = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log('crear nota')
        console.log(newNote)
        const noteAddToState = {
            id:notes.length + 1,
            content:newNote,
            date:new Date().toLocaleString(),
            importante: Math.random() < 0.5
        }
        console.log(noteAddToState)
        //setNotes(notes.concat(noteAddToState))
        setNotes([...notes, noteAddToState])
        setNewNote('')
    }

    const handleShow = () => {
        setShowAll(() => !showAll)
    }
  return (
    <div>
    <button onClick={handleShow}>{showAll ? 'Mostrar solo importante':'show all'}</button>
        <h2>Notas</h2>
        <ol>
        {notes
        .filter(note => {
            if(showAll === true) return true
            return note.importante === true
        })
        .map(note => <Notes key={note.id} {...note}/>)}
        </ol>
        <form onSubmit={handleClick}>
            <input type='text' onChange={handleChange} value={newNote}/>
            <button type='submit'>Crear Nota</button>
        </form>
    </div>
  )
}

export default Renderizado