import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
