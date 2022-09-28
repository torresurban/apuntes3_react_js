import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gifs from './Gifs'

const ListOfGifs = ({params}) => {
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

  useEffect(()=> {
    console.log('Efecto ejecutado')
    setLoading(true)
    getGifs({keyword})
    .then(gifs3 => {
      setGifs(gifs3)
      setLoading(false)
    })
    
  },[keyword])

  if(loading) return <p>Cargando...😉👍😊😂🤣❤😍😒</p>


  return (
    <div>
        {gifs.map(({title, url, id}) => <Gifs title={title} url={url} key={id} id={id}/>)}
    </div>
  )
}

export default ListOfGifs





// import Gifs from './Gifs'

// const ListOfGifs = ({gifs}) => {
//   return (
//     <div>
//         {gifs.map(({title, url, id}) => <Gifs title={title} url={url} key={id}/>)}
//     </div>
//   )
// }

// export default ListOfGifs