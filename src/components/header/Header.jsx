import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import {ReactComponent as Logo} from"./brand1.svg";
import "./header.scss"
const Header = () => {
    const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 90) {
      setColor(true)
    }else{
      setColor(false)
    }
  }
  const navigate = useNavigate();
  const handleHome = ()=> {
    try {
      window.location.href = '#top';
      navigate('/')
    } catch (error) {
      alert('error')
    }
  }

  const ClassTypes = ()=> {
    try {
      window.location.href = '#top';
      navigate('/classestype')
    } catch (error) {
      alert('error')
    }
  }
  const Memberships = ()=> {
    try {
      window.location.href = '#top';
      navigate('/membership')
    } catch (error) {
      alert('error')
    }
  }
  const ContactUs = ()=> {
    try {
      window.location.href = '#top';
      navigate('/contactUs')
    } catch (error) {
      alert('error')
    }
  }


  window.addEventListener('scroll', changeColor)
  return (
    <nav className={color ?'nav-header header-bg' : 'nav-header'}>
        <div className='div-header'>
            <div className='div-svg' onClick={handleHome}>
            <img src="./brand1.svg" alt="" />
            <div className='Title'>Yoga
            </div>
            <div className='subtitle'>With Kavita</div>
            </div>
            
            
            <div className = "navbarrectangle1" >
                <div onClick={handleHome} className='check'>
                Home
                {/* <Link to='/'className='schedule'>Home</Link> */}
                </div>
                {/* <div className='navbarscheduleBooking1'>
                <Link to='/scheduling' className='schedule'>Schedule & Booking</Link>
                </div> */}
                <div onClick={ClassTypes} className='check'>
                {/* <Link to='/classestype' className='schedule'> Classes Type</Link> */}
                Classes Types
                </div>
                <div onClick={Memberships} className='check'>
                Memberships
                {/* <Link to='/membership' className='schedule'>Memberships</Link> */}
                </div>
                <div onClick={ContactUs} className='check'>
                Contact Us
                {/* <Link to ='/contactUs'  className='schedule'>Contact Us</Link> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header