import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function User() {
  return (
    <div>
      <h1>User</h1>
      <Link to='login'>Login</Link>
      <br/>
      <Link to={'regi'}>Register</Link>
      <Outlet/>
    </div>
  )
}

export default User
