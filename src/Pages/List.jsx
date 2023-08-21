import React from 'react'
import '../styles/list.css'
const list = () => {
  return (
    <div className="image">
      <div className='card'>
      <img src="/bell.jpg" className='img'/></div>
      <div className='buttons'>
        <button className='btn1'>New Features</button>
        <button className='btn2'>Workflow Stages</button>
      </div>
     <div className='text'>
      <h3>🚀Logic Satges</h3>
     </div>
     <div className='para'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi reiciendis debitis natus non ea, omnis laudantium odit dolorem tenetur quam aliquid aspernatur consectetur! Reprehenderit cupiditate sunt at optio nemo.</p>
     </div>
     <div className='ftr'>
      <p> 20 March 2023 <span className='mins'> 🕓4 mins</span></p>
     </div>
     <div className='more'>
      <p className='see'> See more</p>
     </div>
     
    </div>
    
  )
}

export default list