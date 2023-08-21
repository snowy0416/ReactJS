import React from 'react'

const Footer = () => {
  return (
    <div class ="bg-black">
<div class=" flex flex-row justify-center mt-20 text-white">
  <p class="text-4xl">Our Location</p></div>
  <div class=" flex flex-row justify-center mt-6 text-white">
  <p>Jl. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p></div>
  <div class=" flex flex-row justify-center mt-2 text-white ">
  <p>Customer Service +6282-2876-6862</p> </div>
  <div class=" flex flex-row justify-center mt-2 text-white">
  <p>We Are Open from Sun - Mon 10 AM - 22 PM</p></div>

  <hr className='text-slate-100 h-2px m-10'></hr>

 <div className='flex py-5 pl-36 w-12/12 justify-between pr-36'>
       
       <div className='flex left'>
        <img className='w-10 h-7 px-2 text-white' src="/spotify.png"/>
        <img className='w-10 h-7 px-2 text-white' src="/instagram.png"/>
        <img className='w-10 h-7 px-2 text-white' src="/vector1.png"/>
        <img className='w-10 h-7 px-2 text-white' src="/youtube.png"/>
        <img className='w-10 h-7 px-2 text-white' src="/twitter.png"/>
        <img className='w-10 h-7 px-2 text-white' src="/telegram.png"/>
    
      

       </div>
       <div className='flex right'>
      <button className='text-white px-2'>Delivery Order</button>
       <img className='w-30 h-25 px-2 text-white' src="/logo app store.png"/>
       <img className='w-30 h-30 px-2 text-white' src= "/logo google play.png"/>
      
       </div>
            </div>
            <div className='flex py-5 pl-36 w-12/12 justify-between pr-36'>
              <div className='footer left'>
                <p className='text-[#A27B5C]'>© 2023 IMAJI COFFEE, All rights reserved</p>
              </div>
              <div className='footer right'>
                <p className='text-[#A27B5C]'>Terms and Conditions | Privacy Policy</p>
              </div>

            </div>
          </div>
  )
}

export default Footer