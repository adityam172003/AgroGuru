


import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'

import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterWeb from '../Component/FooterWeb'

export const Services = () => {

    const nevigate = useNavigate();
    const [dat,setdat ] =useState()
    const getuser = async()=>{
      await axios.get('/user/getuser').
      then((res)=>{
         setdat(res.data.name);
         console.log(res.data.name)
      })
      .catch(()=>{
         
          nevigate('/');
          alert("Please Login first");
      })
      
  
         
  }
  
  useEffect(()=>{
      getuser();
  },[])



  return (
    <>
        <MainNavbar/>
        <Outlet/>
        <FooterWeb />
    </>
  )
}


export default Services