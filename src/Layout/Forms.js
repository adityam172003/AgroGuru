import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../Component/MainNavbar'

export const Forms = () => {
  return (
    <>
        <MainNavbar/>
        <Outlet/>
    </>
  )
}
