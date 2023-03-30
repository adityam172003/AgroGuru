import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/user/login'>Login</Link>
      <br/>
      <Link to={'user/regi'}>Register</Link>
    </div>
  )
}

export default Home
