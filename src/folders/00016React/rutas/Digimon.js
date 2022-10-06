import React, { useEffect, useState } from 'react'

const Digimon = (props) => {
    console.log(props)
    const [digi, setDigi] = useState([])

    useEffect(() => {
        fetchDigi()
        // eslint-disable-next-line
    }, [])
    
    const fetchDigi = async() => {
        const data = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${props.match.params.name}`)
        const json = await data.json()
        setDigi(json)
    }

  return (
    <div>
        {
            digi.map((e, index) => 
            <div key={index}>
                <span>{e.name}</span>
                <img src={e.img} alt=''/>
            </div>)
        }
    </div>
  )
}

export default Digimon