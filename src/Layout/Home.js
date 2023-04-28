import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
import HomeNavbar from '../Component/HomeNavbar'
import Login from '../Pages/User/Login'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Login/>
     
    </div>
  )
}

export default Home
// hello