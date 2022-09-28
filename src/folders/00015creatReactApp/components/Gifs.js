import React from 'react'
import './Gifs.css'

const Gifs = ({id, title, url}) => {
  return (
    <a href={`#${id}`} className='Gif'>
        <h4>{title}</h4>
        
        <img src={url} alt={title}/>
    </a>
  )
}

export default Gifs