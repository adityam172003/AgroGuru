import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'
function Main() {
  return (
   <>
     
     <MainNavbar/>
     <Outlet/>
   </>
  )
}

export default Main