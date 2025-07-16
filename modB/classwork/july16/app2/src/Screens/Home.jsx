import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
   const navigate= useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>{navigate("/contact")}}>Contact</button><button onClick={()=>{navigate("/about")}}>About</button><button onClick={()=>{navigate("/products")}}>Products</button>
   {/* <button><Link to="/about">About</Link></button>  <button><Link to="/contact">Contact</Link></button> */}
    </div>
    // Basic routing
    //Nested routing
    //Protected Routing
    // dynamic routing
    // LINK KA TAG BUTTON M USE NH KRTAY LINK ANCHOR TAG KI JGAH USE HOTA H
    // button m hm usenavigate ka hook use krtay hain
  )
}

export default Home
