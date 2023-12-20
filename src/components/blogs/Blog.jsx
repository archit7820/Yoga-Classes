import React from 'react'
import "./Blog.scss"
const Blog = () => {
  return (
    <div className='blog'>
      
        <div className="blogHeadline">Latest News and Headlines</div>

        <div className="blogsection">


            <div className="blog1">
            <a href="https://www.health.harvard.edu/staying-healthy/yoga-benefits-beyond-the-mat" target="_blank" rel="noopener noreferrer" >
            <div className="blogimg">
                <img src ="./yogaMat.jpg" alt =""   height ='200px'  width= '300px'/>  </div>
                <div className="blogtext">
            <div className="blogtext1">Yoga Benefits beyond the mat</div>
            <div className="blogtext2">Yoga, an ancient practice and meditation, has become increasingly popular in today's busy society. For many people, yoga provides a retreat from their chaotic and busy lives...</div>
            
            <div className="blogown">
                <div className="blogimgown">
                    <img src ="./blogimgown.svg" alt ="" />
                </div>
               <div className="blogownnameanddate">
                <div className="blogname">Harvard Health </div>
                <div className="blogdate">Nov 10 , 2023</div>
                
               </div>
            </div>
            </div>
            </a>
            </div>




            <div className="blog1">
            <a href="https://www.arhantayoga.org/blog/what-is-hatha-yoga-philosophy-and-practice/" target="_blank" rel="noopener noreferrer">
            <div className="blogimg">
                <img src ="./HathaYoga1.jpg" alt ="" height= '200px'  width= '300px'/>  </div>
                <div className="blogtext">
            <div className="blogtext1">Hatha Yoga And Its Benefits</div>
            <div className="blogtext2">Hatha in Sanskrit literally means ‘stubborn’. So Hatha Yoga practice means the stubborn practice of yoga, without the interference of the five senses and the mind...</div>
            
            <div className="blogown">
                <div className="blogimgown">
                    <img src ="./blogimgown.svg" alt ="" />
                </div>
               <div className="blogownnameanddate">
                <div className="blogname">Ram Jain</div>
                <div className="blogdate">8 Nov , 2019</div>
                
               </div>
            </div>
            </div>
            </a>
            </div>



            <div className="blog1">
            <a href="https://www.everydayhealth.com/fitness-pictures/10-surprising-health-perks-of-yoga.aspx" target="_blank" rel="noopener noreferrer">
            <div className="blogimg">
                <img src ="./9benefits.jpg" alt =""  height ='200px'  width= '300px'/>  </div>
                <div className="blogtext">
            <div className="blogtext1">9 Ways Practicing Yoga Benefits Your Health and Well-Being</div>
            <div className="blogtext2">For thousands of years, yogis have been touting yoga’s mental and physical powers. Luckily, you don’t have to be an expert to reap the benefits — adding just a few yoga poses...</div>
            
            <div className="blogown">
                <div className="blogimgown">
                    <img src ="./blogimgown.svg" alt ="" />
                </div>
               <div className="blogownnameanddate">
                <div className="blogname">Wyatt Myers</div>
                <div className="blogdate">Jul 21 , 2023</div>
                
               </div>
            </div>
            </div>
            </a>
            </div>


            </div> 


    </div>
  )
}

export default Blog
