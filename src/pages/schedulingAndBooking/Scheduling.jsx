import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./scheduling.scss"
import ScrollableContainer from './ScrollableContainer'
import Header from '../../components/header/Header'
const Scheduling = () => {
  return (

    <div className='scheduling'>
      <Header/>
      <h1>Your Budget Friendly Yoga</h1>
      <ScrollableContainer/>
      Scheduling and booking
      <Footer/>
    </div>
  )
}

export default Scheduling
