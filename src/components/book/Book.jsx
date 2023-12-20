import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./book.scss"

const Book = () => {

   const navigate = useNavigate();
   const handleBookNow = () => {
    try {
      window.location.href = '#top';
      navigate("/membership")
      
      
    } catch (error) {
       console.error("error")
    }
   }


  return (
//     <div className='book'>

//       <div className="bookdetails">

       

//         <div className="bookimg">
//         <img className='bookvector2' src= "./bookvector2.png" alt = ""  width= "200px" height= "300px"/>
//             <img  src ="./bookimg1.svg"  alt =""   width="500px" height= "500px"/>
            
//         </div>
//         <div className="booktext">
//         <img className='bookvector1' src= "./bookvector1.png" alt = "" width= "130px" height= "80px" />
//             <div className="booktext1"> Book Classes  with 
// Us  (Yoga with Kavita)</div>
// <div className="booknowcover">
// <button className = "bookexplore" onClick={handleBookNow}>Book Now</button>
// <img className='bookvector3' src= "./bookvector3.png" alt = "" width= "150px" height= "70px"/>
// </div>
//    </div>
//       </div>
//     </div>
<div className='book'>

<div className="bookdetails">

 

  <div className="bookimg">
  <img className='bookvector2' src= "./bookvector2.png" alt = ""  width= "200px" height= "300px"/>
      <img  src ="./bookimg1.svg"  alt =""   width="500px" height= "500px"/>
      
  </div>
  <div className="booktext">
  <img className='bookvector1' src= "./bookvector1.png" alt = "" width= "130px" height= "80px" />
      <div className="booktext1"> Book Classes  with 
Us  (Yoga with Kavita)</div>
<div className="booknowcover">
<div className="bookexplore" onClick={handleBookNow}>Book Now</div>
<img className='bookvector3' src= "./bookvector3.png" alt = "" width= "150px" height= "70px"/>
</div>
</div>
</div>
</div>
  )
}

export default Book
