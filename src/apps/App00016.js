import React from 'react'
import '../App.css'
import Digimon from '../folders/00016React/componente/Digimon'

const App00016 = () => {
     const initial =[
        {
        "name": "Koromon",
        "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
        "level": "In Training"
        },
        {
        "name": "Tsunomon",
        "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        "level": "In Training"
        },
        {
        "name": "Yokomon",
        "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
        "level": "In Training"
        },
        {
        "name": "Motimon",
        "img": "https://digimon.shadowsmith.com/img/motimon.jpg",
        "level": "In Training"
        },
        {
        "name": "Tanemon",
        "img": "https://digimon.shadowsmith.com/img/tanemon.jpg",
        "level": "In Training"
        },
        {
        "name": "Bukamon",
        "img": "https://digimon.shadowsmith.com/img/bukamon.jpg",
        "level": "In Training"
        },
        {
        "name": "Tokomon",
        "img": "https://digimon.shadowsmith.com/img/tokomon.jpg",
        "level": "In Training"
        },
    ]
  return (
    <div>
        
        
        <Digimon datos={initial}/>
    </div>
  )
}

export default App00016