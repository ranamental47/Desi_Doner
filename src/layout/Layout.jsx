import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout
