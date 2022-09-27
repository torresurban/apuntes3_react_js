import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Notes from './Notes'


const Renderizado3 = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const {data} = res
            setNotes(data)
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

        axios
            .post('https://jsonplaceholder.typicode.com/posts',noteAddToState)
            .then(res => {
                const {data} = res
                setNotes([...notes, data])
                //setNotes(prevNotes => prevNotes.concat(data))
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

export default Renderizado3