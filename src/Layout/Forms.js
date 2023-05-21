import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'
import FooterWeb from '../Component/FooterWeb'

export const Forms = () => {
  return (
    <>
        <MainNavbar/>
        <Outlet/>
        {/* <FooterWeb /> */}
    </>
  )
}
