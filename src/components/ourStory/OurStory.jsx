import React from 'react'
import "./ourstory.scss"
const OurStory = () => {

    

  return (
    <div className='story'>
        <img  className="storybg "src ="./storybg.png" alt ="" width = "1300px" height="800px" />

      <div className="storytitle">Our Story</div>
      <div className="storytext">
        <div className="story1">Our humble discovery of Yoga began in 2011 while living in the bustling streets of New York City. Despite the initial challenges and sweating profusely in a packed hot class, yoga touched our souls. However, life had its own plans, and a knee injury while surfing tested our determination. But with the unwavering support and encouragement of friends we crossed paths with, we found our way back to the practice, discovering patience, healing and acceptance along the way.
        <div className="booknow">
     {/* <img className='arrowstory' src ="./arrowstory.png" alt= " " width= "50px" height= "50px" /> */}
     
     {/* <img className='bookround' onClick={handleBook} src ="./bookround.png" alt= " " width= "100px" height= "100px" /> */}
       </div></div>
        <div className="story2">Since then, yoga has become the guiding light through life's trials and triumphs—a constant companion during injuries, emotional hardships, and joyous moments. We are forever grateful for the transformative journey it has bestowed upon us.

We invite you to join our vibrant community, where you can move freely and live fully in the present moment. Tranquil Tree Yoga is more than a studio; it is a sanctuary where you can nourish your mind, body, and spirit. Come and experience the unparalleled blend of tranquility and invigoration that awaits you within our doors. Embrace the beauty of San Diego's yoga scene and its ocean, and let us be your sanctuary of serenity.</div>
      </div>
      
      <div className="storyimg"> <img src ="./storyimg.png" alt =""  width = "600px" height= "450px" /></div>
      <div className="storyvector"><img src ="./storyvector.png" alt="" width= " 250px" height="300px"/></div>
    </div>
  )
}

export default OurStory
