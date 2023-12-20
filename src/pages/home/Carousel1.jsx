import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.scss";


const Carousel1 = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const handlePrev = () => {
      setIndex(index - 1 < 0 ? 2 : index - 1);
    };
  
    const handleNext = () => {
      setIndex(index + 1 > 2 ? 0 : index + 1);
    };
   
     const navigate = useNavigate();

     const handleExplore =() => {
      try {
        window.location.href = '#top';
         navigate('/classesType')
      } catch (error) {
        
      }
     }

    return (  
    <div  className='carousel1'>
      <div>
      {/* Carousel Component */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {/* Custom Content for Slide 1 */}
          <div className="custom-slide-content">
          <div className="welcomgroup">

  <div className="welcometext">
    <div className="welcomefull">
  <div className="welcome">Welcome to Yoga </div>
  <div className="classes">Classes With</div>
  <div className="kavita">Kavita</div>
  <div className="inhale">Inhale , Exhale & Relax </div>
  <div className="exploreoutline">
   <div className="explore" onClick={handleExplore}>Explore Now </div>
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
   </div>


          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* Custom Content for Slide 2 */}
          <div className="custom-slide-content">
         
   <div className="welcomgroupcorporate">

<div className="welcomecorporatetext">
  <div className="welcomefullcorporate">
<div className="welcomecorporate">Welcome to Corporate Yoga </div>
<div className="corporate">Corporate Yoga Is Being Embraced By Many Progressive Business And Is A Great Benefits And Is A Geate Benefit To The Workplace </div>
<div className="exploreoutlinecorporate">
 <div className="explorecorporate" onClick={handleExplore}>Explore Now </div>
 </div>
</div>
 </div>


    <div className="corporatedisplay">
    <div class="welcomegrid-container">
    <div className="displaygrid">
<img  className='display1'   src = "./corporateyoga.jpg" alt = " " width = "299px " height= "178px"></img>
<img  className='display6'    src = "./corporateyoga2.jpg" alt = " " width = "299px " height= "186px"></img>
</div> 

<img  className= " display5" src = "./corporateyoga3.jpg" alt = " " width = "465px " height= "366px"></img>




</div>
 </div>
 </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* Custom Content for Slide 3 */}
          <div className="custom-slide-content">
           
 <div className="welcomgroupcorporate">

<div className="welcomecorporatetext">
  <div className="welcomefullcorporate">
<div className="welcomecorporate">Discover Yourself with Yoga </div>
<div className="corporate">Yoga unveils inner strength, promotes self-awareness, and fosters tranquility, guiding you to discover profound self-harmony and balance.</div>
<div className="exploreoutlinecorporate">
 <div className="explorecorporate" onClick={handleExplore}>Explore Now </div>
 </div>
</div>
 </div>


    <div className="corporatedisplay">
    <div class="welcomegrid-container">
    <div className="displaygrid">
<img  className='display1'   src = "./discover3.jpg" alt = " " width = "299px " height= "178px"></img>
<img  className='display6'    src = "./discover.jpg" alt = " " width = "299px " height= "186px"></img>
</div> 

<img  className= " display5" src = "./discover2.jpg" alt = " " width = "465px " height= "366px"></img>




</div>
 </div>
 </div>





          </div>
        </Carousel.Item>
      </Carousel>

      {/* Control Buttons */}
      <div className="control-buttons">
      
      </div>
    </div>

    </div>
  )
}

export default Carousel1;