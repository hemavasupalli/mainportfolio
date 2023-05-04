import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Body = ({darkMode,open }) => {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <Header />
    <Outlet/>
    <Footer />
   
    </div>
  

  )
  
}

export default Body
