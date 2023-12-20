import React from 'react'
import './teacher.scss'
export const Teacher = () => {
  return (
    <div className='teacher'>
        <div className='teachermeet'>
            Meet Our Teachers
        </div>
        <div className='teacherphoto'>

            <div className='teacher_1'>
                <div className="teacherimg">
                <img   src="./teacher1.png" alt="" width= '300px' height= '400px' border-radius = "20px"/>
                </div>
                <div className="teachertext">Kavita</div>
                <div className="teachertype">Chakra Instructor</div>
            </div>

            <div className='teacher_2'><img src="/teacher2.png
            " alt="" width= '300px' height= '400px' />
            <div className="teachertext">Vivek Raj</div>
                <div className="teachertype">Yoga Instructor</div></div>
            <div className='teacher_3'>
          <img src="./teacher3.jpg" alt="" width= '300px' height= '400px' />
          <div className="teachertext">Urmila</div>
                <div className="teachertype">Hatha Instructor</div></div>
        </div>
       

    </div>
  )
}
export default Teacher
