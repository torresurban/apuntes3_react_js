import React, { useEffect, useRef, useState } from 'react'
import socket from './Socket'
import './Chat.css'

const Chat = ({nombre}) => {
    const [mensaje, setMensaje] = useState('')
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        socket.emit('conectado', nombre)
    }, [nombre])

    useEffect(() => {
        socket.on('mensajes', newMensaje => {
            setMensajes([...mensajes, newMensaje])
        })
        return () => {socket.off()}
    }, [mensajes])

    const divRef = useRef(null)
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior:'smooth' })
    })

    const submit = (e) => {
        e.preventDefault()
        socket.emit('mensaje', nombre, mensaje)
        setMensaje('')
    }


  return (
    <div>
        <h1>OsoS App'S</h1>
        <div className='chat'>
            {mensajes.map((e, i) => <div key={i}><div></div>{e.nombre}<div>{e.mensaje}</div></div>)}
            <div ref={divRef}></div>
        </div>
        <form onSubmit={submit}>
            <label htmlFor='mensaje'>Escriba su mensaje</label>
            <textarea id='mensaje' cols='30' rows='10' value={mensaje} onChange={e => setMensaje(e.target.value)}>

            </textarea>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Chat