import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  "./navbar.scss"
const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 90) {
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)


  
  return (
    <div className='navbar'>
            <div className="navbargroup4">
            <div className='Yoga'>
        <div className='Logo'>
        <img src="./brand1.svg" alt="" />
        </div>
        <div className="titleandsub">
        <div className='Title'>Yoga </div>
        <div className='subtitle'>
         With 
         Kavita
        </div>
        </div>
        </div>
      			<div className="navbarrectangle1" >
            {/* <div className="navbarhome">Home</div> */}
            <Link to='/' className='navbarhome'>Home</Link>
            <div className="navbarscheduleBooking1">
              <Link to='/scheduling'>Schedule & Booking</Link>
              </div>
      			 {/*}<div className="navbarpassesMemberships1">Passes & Memberships</div> {*/}
      			<div className="navbarclassesType">
              <Link to='/classestype'> Classes Type</Link>
              </div>
      			<div className="navbarweAreHiring">
              <Link to='/hiring'>Memberships</Link>
              </div>
            <div className="navbarcontactbox">
      	  	<div className="navbarcontactUs">
              <Link to ='/contactUs'>Contact Us</Link>
              </div></div>
          </div>
    		</div>


   {/* <div className="welcomgroup">

  <div className="welcometext">
    <div className="welcomefull">
  <div className="welcome">Welcome to Yoga </div>
  <div className="classes">Classes With</div>
  <div className="kavita">Kavita</div>
  <div className="inhale">Inhale , Exhale & Relax </div>
  <div className="exploreoutline">
   <div className="explore">Explore Now </div>
   </div>
  </div>
  
  
   </div>


      <div className="display">
      <div class="welcomegrid-container">
      <div className="displaygrid">
 <img  className='display1'   src = "./display1.png" alt = " " width = "299px " height= "178px"></img>
 <img  className='display6'    src = "./display6.png" alt = " " width = "299px " height= "178px"></img>
 </div>
  <img  className= " display5" src = "./display5.png" alt = " " width = "465px " height= "358px"></img>
  <img className= "vectorIcon" alt="" src="vectorwelcom.svg" />
 
  </div>
   </div>
   </div>  */}











    </div>
  )
  }

export default Navbar
