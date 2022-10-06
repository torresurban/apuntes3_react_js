import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DigimonList = () => {
    const [digimon, setDigimon] = useState([])

    useEffect(() => {
        fetchDigimon()
    }, [])
    
    const fetchDigimon = async() => {
        const resp = await fetch('https://digimon-api.vercel.app/api/digimon')
        const datos = await resp.json()
        setDigimon(datos)
    }

  return (
    <div>
        {
            digimon.map(e => 
            <div key={e.name}>
                <Link to={`/digimon/name/${e.name}`}>
                    {e.name}
                </Link>
            </div>)
        }
    </div>
  )
}

export default DigimonList