import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About us</h1>
       <button><Link to="/">Home</Link></button><button><Link to="/contact">Contact</Link></button>
    </div>
  )
}

export default About
