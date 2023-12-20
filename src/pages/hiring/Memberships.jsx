import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Memberships.scss'
import { useNavigate } from 'react-router-dom'

const ImageWithDescription = ({ id, src, alt, description }) => (
  <div key={id}>
    <img src={src} alt={alt} />
    <p>{description}</p>
  </div>
);

const Memberships = () => {

  const navigate = useNavigate();
  const handleBuy = ()=> {
    try {
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          
        </a>
      
    } catch (error) {
       console.error("error")
    }
  }



 
  const images = [
    {
      id: 1,
      // src: '/class-yoga5u.jpg',
      src:'class-yoga8.jpg',
      alt: 'Image 1',
      //description: 'Monthly Membership',
    },
    {
      id: 2,
      // src: '/class-yoga6u.jpg',
      src:'class-yoga9.jpg',
      alt: 'Image 2',
     // description: 'Yearly Membership',
    },
    {
      id:3,
      // src: '/class-yoga6u.jpg',
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:4,
      // src: '/class-yoga6u.jpg',
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:5,
      // src: '/class-yoga6u.jpg',
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    {
      id:6,
      // src: '/class-yoga6u.jpg',
      src:'class-yoga10.jpg',
      alt:'Image 3',
      description:'third image',
    },
    
  ];


  return (
    
    <div>
        <Header/>
        
       <div className='customertext'>Memberships</div>

       <div class="image-grid">
       <div class="image-item">
       <img src = "class-yoga9.jpg" alt = " "></img>
       <div class="info">
       <h4>Yoga For Beginners</h4>
       <p>7:00 AM - 9:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "class-yoga8.jpg" alt = " " ></img>
       <div class="info">
       <h4>Yoga For Women</h4>
       <p>9:00 AM - 10:30 AM.</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "./class-yoga11.jpg" alt = " " ></img>
       <div class="info">
       <h4>Asanas In Yoga</h4>
       <p>6:00 AM - 7:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img  src = "./class-yoga15.jpg" alt = " " ></img>
       <div class="info">
       <h4>Face Yoga</h4>
       <p>10:00 AM - 11:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img   src = "./class-yoga12.jpg" alt = " " ></img>
       <div class="info">
       <h4>Evening Yoga</h4>
       <p>5:00 PM - 6:00 PM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>

  <div class="image-item">
  <img src = "./class-yoga13.jpg" alt = " "></img>
       <div class="info">
       <h4>Pranayama</h4>
       <p>7:00 AM - 9:00 AM</p>
       <a className="book-button" href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
    </div>
  </div>
  




</div>

        {/* <div className='mber'>
        {images.map((image) => (
         <ImageWithDescription key={image.id} {...image} />
     
      ))}

        </div> */}
       
   
        {/* <div className='customer'> 

<div className="customertext">Memberships That We Offer</div>

<div className="customerdemo">

  <div className="custo">
<div className="customernamephoto">
  
//   <div className="customername">Monthly</div>
//   </div>
// <div className="customersays">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto temporibus, obcaecati id, non unde veritatis expedita facere rerum possimus velit dolorem sed ad laborum natus maxime earum. Exercitationem, fuga.</div>
// <button className="green-button" >Get Yours Now!</button>
// </div>
// <div className="custo">
// <div className="customernamephoto">

  <div className="customername">Yearly
 
  </div>
  </div>
<div className="customersays">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto temporibus, obcaecati id, non unde veritatis expedita facere rerum possimus velit dolorem sed ad laborum natus maxime earum. Exercitationem, fuga.

</div>
<button className="golden-button" >Get Yours Now!</button>
</div>

</div>





</div> */}
  {/* <div className="container">
      <div className="box monthly">
        <h2>Monthly Plan</h2>
        <ul>
          <li>Access to all yoga classes for one month.</li>
          <li>Customized workouts for your goals.</li>
          <li>Weekly live sessions with instructors.</li>
        </ul>
       
        <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          BOOK NOW
        </a>
      </div>

      <div className="box yearly">
        <h2>Yearly Plan</h2>
        <ul>
          <li>Save with our annual plan.</li>
          <li>Personalized guidance for a year.</li>
          <li>Exclusive discounts on workshops.</li>
        </ul>
     
        <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
          BOOK NOW
        </a>
      </div>
    </div> */}

        <Footer/>
        </div>
  )
}

export default Memberships