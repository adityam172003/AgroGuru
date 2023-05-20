import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import "../Styles/Home_page_ui.css"


import axios from 'axios';
import MainCarousel from '../Component/MainCarousel';
import MainInfo from '../Component/MainInfo';
import FooterWeb from '../Component/FooterWeb';


function Main() {
 

           const nevigate = useNavigate();
           const [dat,setdat ] =useState();
  
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
    <MainCarousel />
    <MainInfo /> 
    <FooterWeb />
   </>
  )


}

export default Main