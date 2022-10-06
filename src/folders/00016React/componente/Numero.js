import React from 'react'

const Numero = () => {
    const miNUmero = Math.floor(Math.random() * 10)
  return (
    <div>
        {miNUmero}
    </div>
  )
}

export default Numero