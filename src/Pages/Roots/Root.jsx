import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
