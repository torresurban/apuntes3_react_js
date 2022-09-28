import React from 'react'
import '../App.css'
import ListOfGifs from '../folders/00015creatReactApp/components/ListOfGifs'
import { Route, Link } from 'wouter'

const App00015 = () => {

  return (
    <div className='App'>
        <section className='App-content'>
        <h1>Create react App</h1>
        <Link to='/gif/peru'>Gif de Perú</Link>
        <Link to='/gif/colombia'>Gif de Colombia</Link>
        <Link to='/gif/mexico'>Gif de México</Link>
        <Link to='/gif/ecuador'>Gif de Ecuador</Link>
        <Link to='/gif/chile'>Gif de Chile</Link>
        <Link to='/gif/panda'>Gif de Panda</Link>
        <Route path='/gif/:keyword' component={ListOfGifs}/>
        
        </section>
    </div>
  )
}

export default App00015



// const App00015 = () => {
//   const [keyword, setKeyword] = useState('peru')

//   return (
//     <div className='App'>
//         <section className='App-content'>
//         <h1>Create react App</h1>
//         <button onClick={() => setKeyword('panda')}>Cambiar keyword</button>
//         <ListOfGifs keyword={keyword}/>
//         </section>
//     </div>
//   )
// }

// export default App00015





// import React, { useEffect, useState } from 'react'
// import '../App.css'
// import ListOfGifs from '../folders/00015creatReactApp/components/ListOfGifs'
// import getGifs from '../folders/00015creatReactApp/services/getGifs'



// const App00015 = () => {
//   const [gifs, setGifs] = useState([])

//   useEffect(()=> {
//     console.log('Efecto ejecutado')
//     getGifs({keyword:'melgar'})
//     .then(gifs3 => setGifs(gifs3))
    
//   },[])

//   return (
//     <div className='App'>
//         <section className='App-content'>
//         <h1>Create react App</h1>
//         <ListOfGifs gifs={gifs}/>
//         </section>
//     </div>
//   )
// }

// export default App00015