import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import axios from 'axios';
function Main() {
 

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
   </>
  )


}

export default Main