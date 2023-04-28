import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../Styles/HomeNavbar.css'

export const MainNavbar = () => {

  const nevigate = useNavigate();
  
const userLogout = async()=>{

  axios.get('/user/logout')
  .then(()=>{
    nevigate('/');
    alert("Logout");
   
    
  })
  .catch((err)=>{
    console.log(err);
  })
}

  return (
    <div className='MainNavbar'>
      <div className='links'>
            <Link to='/main/about'>Home</Link>
            <Link to='/main/crop'>CropPredict</Link>
            <Link to='/main/nur'>Nursery</Link>
            <Link to='/main/market'>Market</Link>
            <Link to='/main/lab'>Lab</Link>
            <Link to='/main/info'>Info</Link>
            <Link to='/main/profile'>Profile</Link>
            <button onClick={userLogout} >logout</button>
      </div>
    </div>
  
  )
}
