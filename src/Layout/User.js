import React from 'react'
// import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import HomeNavbar from '../Component/HomeNavbar'
function User() {
  return (
    <div>
      <h1>User</h1>
      <HomeNavbar />
      {/* <Link to='login'>Login</Link>
      <br/>
      <Link to={'regi'}>Register</Link> */}
      <Outlet/>
    </div>
  )
}

export default User
