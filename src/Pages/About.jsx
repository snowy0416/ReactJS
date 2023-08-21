import React from 'react'
import '../styles/about.css'
import Footer from './Footer'


const About = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#ffedd5]-500 mt-2">
        <div className="left">
        <p className='text-2xl font-bold'>IMJAI <span className='text-2xl text-[#A27B5C] font-bold'>Cofee</span></p>
        </div>
        <div className="right">
        <ul class="flex flex-row justify-center flex gap-4 font-bold">
        <li class="mt-2">Home</li>
        <li class="mt-2"> Story</li>
        <li class="mt-2">Menu</li>
        <li class="mt-2">Space</li>
        <li class="mt-2"> Community</li>
        <li class="mt-2"> News</li>
        <button  class ="bg-[#A27B5C] text-white py-2 px-4 rounded">Order</button>
        <button class = "border border-[#A27B5C] text-[#A27B5C] py-2 px-4 rounded"> Sign-in</button>
        </ul>
        </div>
      </div>
       <div class="bg-[#FCF7EF] p-2 rounded-lg shadow-md">
      <div class ="text-lg md:text-2xl lg:text-6xl font-bold mt-10 justify-center ">
          <p>Our News</p>
        </div>
        <div class = "text-xl mt-6">
        <p>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
        </div>
        <div class=" flex justify-center mt-8 ">
          <img src='/image.png ' ></img>
        </div>
        <div class = "text-2xl mt-6 font-medium">
        <p class="ml-0 justify-center">Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</p>
        </div>
        <div class ="flex flex-row flex-gap-10 justify-center">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
        </div>

     
    <div class="flex flex-col self-stretch p-20 gap-8 justify-center ml-60">
    <hr className='text-slate-100 h-2px mt-10'></hr>
     <div class =" flex items-center  p-7 md:p-0 gap-10  w-261 h-256 flex-shrink-0 ">
     <div>
       <img src ='/image 15.png' class="flex flex-row justify-center  "></img>
        </div>
        <div class=" ml-10 ">
       <pr class="text-3xl font-medium">Visited Doesoen Sirap Coffee, The<br></br> 
            Producer of Robusta in Central Java </pr>
        <div class ="flex flex-row flex-gap-10 ">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
      
        </div>
     </div>
     <hr className='text-slate-100 h-2px mt-10'></hr>
     <div class =" flex items-center  p-7 md:p-0 gap-10 w-261 h-256 flex-shrink-0  ">
     <div>
       <img src ='/image 1.png' class="flex flex-row justify-center "></img>
        </div>
        <div class=" ml-10 ">
       <pr class="text-3xl font-medium">Cold Brew Coffee, How to Drink Cold<br></br> 
       Coffee is More Enjoyable </pr>
       <div class ="flex flex-row flex-gap-10 ">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
        </div>
       
     </div>
     <hr className='text-slate-100 h-2px mt-10'></hr>
     <div class =" flex items-center  p-7 md:p-0 gap-10 w-261 h-256 flex-shrink-0  ">
     <div>
       <img src ='/image 2.png' class="flex flex-row justify-center "></img>
        </div>
        <div class=" ml-10 ">
       <pr class="text-3xl font-medium">Meet Coffee Tonic, the Sensation of<br></br> 
           Drinking Coffee-Flavored Soda </pr>
       <div class ="flex flex-row flex-gap-10 ">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
        </div>
     </div>
     <hr className='text-slate-100 h-2px mt-10'></hr>
     <div class =" flex items-center  p-7 md:p-0 gap-10 w-261 h-256 flex-shrink-0  ">
     <div>
       <img src ='/image 3.png' class="flex flex-row justify-center "></img>
        </div>
        <div class=" ml-10 ">
       <pr class="text-3xl font-medium">Workshop Coffee Sharing Session</pr>
       <div class ="flex flex-row flex-gap-10 ">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
        </div>
     </div>
     <hr className='text-slate-100 h-2px mt-10'></hr>
     <div class ="flex items-center  p-7 md:p-0 gap-10 w-261 h-256 flex-shrink-0 ">
     <div>
       <img src ='/image 4.png' class="flex flex-row ml-2"></img>
        </div>
        <div class=" ml-10 ">
       <pr class="text-3xl font-medium">Workshop Coffee Brewing </pr>
       <div class ="flex flex-row flex-gap-10 ">
        <p class="ml-0">4 Min </p>
        <img class="w-2 h-3 mt-2 ml-1" src='/Ellipse 1210.png'></img>
        <p class="ml-5">August 19, 2022</p>
        </div>
   
        </div>
     </div>
</div>
<button  class ="border border-[#A27B5C] text-[#A27B5C] py-2 px-4 rounded">Learn more</button>

          <Footer/>
       
          </div>


  )
}

export default About