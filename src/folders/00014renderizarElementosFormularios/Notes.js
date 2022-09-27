import React from 'react'

const Notes = ({title, body}) => {
  return (
    <div>
        <li>
                <p>{title}</p>
                <small>{body}</small>
        </li>
    </div>
  )
}

export default Notes