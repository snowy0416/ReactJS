import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
     

    <Link to="/about"> <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
  Click Me
</button></Link>
    </div>
  )
}

export default Home