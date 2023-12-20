import React from 'react'
import ImageWithText from './ImageWithText';
import { useNavigate } from 'react-router-dom';
import './customers.scss';

export const Customers = () => {
   
   
  const navigate = useNavigate();
  const handleMemberShips = () => {
   try {
    window.location.href = '#top';
     navigate("/membership")
    
   } catch (error) {
      console.error("error")
   }
  }


  return (
    <div className='customer2'> 

      <div className="customertext2">Memberships That We Offer</div>
      <div className='member2'>
      <ImageWithText imageUrl="class-yoga1.jpg" text="We have Affordable Membership Plans for you!" />
    </div>

      <div className="customerdemo2">

        <div className="custo2">
      {/* <div className="customernamephoto"> */}
         {/* <div className="customerphoto">
     
       </div> */}
        <div className="customername2">Monthly</div>
        {/* </div> */}
      <div className="customersays2">
      Embark on a transformative journey with our Monthly Yoga Sessions, offering a gateway to holistic 
      well-being. Enjoy the freedom of unrestricted access to a diverse array of yoga classes for an entire month, 
      allowing you to explore various styles and practices. Our expert instructors guide you through each session, 
      promoting physical strength, mental clarity, and inner balance.Our experienced instructors are dedicated to providing personalized
      guidance, ensuring that your journey is tailored to your individual needs and goals.  
      </div>
      <button className="green-button2" onClick={handleMemberShips}>Get Yours Now!</button>
      </div>


      <div className="custo2">
      {/* <div className="customernamephoto"> */}
      {/* <div className="customerphoto">
            </div> */}
        <div className="customername2">Yearly</div>
        {/* </div> */}
      <div className="customersays2"> A year-long wellness journey with our Yearly Yoga Membership, a 
      comprehensive package designed to elevate your yoga practice and overall well-being. Indulge in the 
      luxury of unlimited access to our diverse range of yoga sessions throughout the entire year, providing 
      ample opportunities for growth and self-discovery. As a yearly member, you'll not only benefit from our 
      regular classes but also gain exclusive access to specialized workshops and events, allowing you to 
      deepen your practice and explore new facets of yoga. 
     
      </div>
      <button className="golden-button2" onClick={handleMemberShips} >Get Yours Now!</button>
      </div>
      </div>


     


      </div>




  )
}
