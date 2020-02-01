import React, { useState, useEffect } from 'react'
import './Main.css'

export default function Main () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://5e33c86ce0161c00140ac44f.mockapi.io/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className='main-container'>
      {/* <img src='Wooza Ventures' alt='Wooza Ventures' /> */}
      <h1>Wooza Ventures</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar} alt='User Avatar' />
            <strong>{user.name}</strong>
            <p>{user.cargo}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
