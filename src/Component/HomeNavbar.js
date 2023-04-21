import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/HomeNavbar.css'

const HomeNavbar = () => {
  return (
    <div className='HomeNavbar'>
        <div className='links'>
            <Link to='/user/regi'>Register</Link>
            <Link to='/user/login'>Login</Link>
        </div>
    </div>
  )
}

export default HomeNavbar