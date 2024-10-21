import React from 'react'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
