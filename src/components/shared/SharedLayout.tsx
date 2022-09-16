import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navBar/NavBar'

const SharedLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout