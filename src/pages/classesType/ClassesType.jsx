import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './classesType.scss'


const YogaClass = () => {
  return (
    <div className="class-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./yoga3D.png" alt="Yoga Class" className="class-image" />
        </a>
      
      <h2>Yoga Class</h2>
      <p>
        Join our Yoga class to experience a journey of physical and mental well-being. Through a harmonious blend of
        poses, breathwork, and meditation, discover the transformative power of yoga to enhance flexibility, strength, and
        inner peace.
      </p>
    </div>
  );
};

const MeditationClass = () => {
  return (
    <div className="class-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./med3D.png" alt="Meditation Class" className="class-image" />
        </a>
      
      <h2>Meditation Class</h2>
      <p>
        Immerse yourself in the serene practice of meditation. In this class, we explore mindfulness and contemplative
        techniques to cultivate a calm and focused mind. Join us on a journey to discover the profound benefits of
        meditation for overall well-being.
      </p>
    </div>
  );
};

const FusionClass = () => {
  return (
    <div className="class-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./Frame3D.png" alt="Fusion Class" className="class-image"  />
        </a>
      
      <h2>Fusion Class</h2>
      <p>
        Experience the best of both worlds with our Fusion class. This unique blend combines elements of yoga and
        meditation, offering a holistic approach to wellness. Join us for a dynamic and rejuvenating session that
        harmonizes body and mind.
      </p>
    </div>
  );
};



const ClassesType = () => {
  return (
   
    <div>
    <Header/>
    <div className='classesType-text'>ClassesTypes</div>
    <div className="app-container">
    
    <YogaClass />
    <MeditationClass />
    <FusionClass />
  </div>
  <Footer/>
  </div>
  )
}

export default ClassesType
           