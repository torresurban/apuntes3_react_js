import React from 'react'
import {Link} from 'wouter'
import Fav from 'components/Fav'
import './Gifs.css'

const Gif = ({id, title, url}) => {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id}></Fav>
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}

export default Gif





/* import React from 'react'
import './Gifs.css'

const Gifs = ({id, title, url}) => {
  return (
    <a href={`#${id}`} className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={title}/>
    </a>
  )
}

export default Gifs */