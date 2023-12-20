import React from 'react'
import  "./footer.scss"
import { useNavigate } from 'react-router-dom'
const Footer = () => {
 
   const navigate = useNavigate();

  const handleKav = () => {
     try {
      window.location.href = '#top';
       navigate('/');
      
     } catch (error) {
       alert('error')
     }
  }
  return (
    <div className='Origin'>


       
            <div className="logoemail">
        <div className='Yoga' onClick={handleKav}>
        <div className='Logo'>
        <img src="./brand1.svg" alt="" />
        </div>
        <div className="titleandsub">
        <div className='Title'>Yoga </div>
        <div className='subtitle'>
         With Kavita
        </div>
        </div>
        </div>



       {/* <div className='Subscribe'>
       <div className='sub'>
       Subscribe
       </div>
       <div className='Email' >
        <div className="emailtext">
       Enter your email
       </div>
       </div>
       </div> */}
       </div>


       <div className='Base'>
       <div className='First'>
        <div className='Links'>
          Important Links
          </div>
        <div className='One'>We are hiring</div>
        <div className='One'>Schedule and Booking</div>
        <div className='One'>Classes Type</div>
        <div className='One'>Memberships</div>
        <div className='One'>Contact us</div>
        </div>
        <div className='First'>
        <div className='Links'>
          Classes Types
          </div>
        <div className='One'>Yoga</div>
        <div className='One'>Fusion</div>
        <div className='One'>Meditation</div>
        </div>
        <div className='First'>
        <div className='Links'>
          Legal Terms
          </div>
        <div className='One'>FAQs</div>
        <div className='One'>Terms and Conditons</div>
        <div className='One'>Privacy Policy</div>
        </div>
        <div className='First'>
        <div className='Links'>
          Contact Us
          </div>
        <div className='One'> +91-8953279337</div>
        <div className='One'>yogawithkavitatripathi@gmail.com</div>
        </div>
        </div>
        <div className='foot'>
        <div className='copyright'>
        Copyright & Trademark © 2023 - All Rights Reserved.
          </div>


          <div className='Connect'>
            <a href='https://www.instagram.com/yogawithkavitatripathi/' >
            <img src  ="./Instagram.png"  alt ="" width= "30px" height= "30px" />
            </a>
           
         

            <a href='https://www.facebook.com/profile.php?id=61551485098114'>
            <img src  ="./Facebook.png"  alt ="" width= "30px" height= "30px"  />
            </a>
           
            <a href='https://youtube.com/@YogaWithKavitaTripathi?si=DGzr9VX9th--Mi3i'>
            <img src  ="./YouTube.png"  alt ="" width= "30px" height= "30px"  />
            </a>
           
            {/* <img src  ="./TwitterX.png"  alt =""  width= "30px" height= "30px"  />
            <img src  ="./LinkedIn.png"  alt ="" width= "30px" height= "30px"  /> */}

          </div>


          </div>
    </div>
  )
}

export default Footer
