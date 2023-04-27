import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'








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
    <div>MainNavbar

    <button onClick={userLogout} >logout</button>

    </div>
  
  )
}
