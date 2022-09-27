import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { getAllNotes } from './servicios/getAllNotes'
import { createNotes } from './servicios/createNotes'


const Renderizado4 = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getAllNotes()
        .then(notes3 => {
            setNotes(notes3)
            setLoading(false)
        })
    },[])

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log('crear nota')
        console.log(newNote)

        const noteAddToState = {
            title:newNote,
            body:newNote,
            userId:1,
            importante: Math.random() < 0.5
        }
        console.log(noteAddToState)

        createNotes(noteAddToState)
            .then(newNote2 =>{
                setNotes(prevNote => prevNote.concat(newNote2))
            })

        //setNotes(notes.concat(noteAddToState))
        //setNotes([...notes, noteAddToState])
        setNewNote('')
    }

    const handleShow = () => {
        setShowAll(() => !showAll)
    }
  return (
    <div>
        <button onClick={handleShow}>{showAll ? 'Mostrar solo importante':'show all'}</button>
        <h2>Notas</h2>
        {loading ? 'Cargando' : ''}
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

export default Renderizado4