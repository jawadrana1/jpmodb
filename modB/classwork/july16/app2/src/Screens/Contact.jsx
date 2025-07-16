import React from 'react';
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <button> <Link to="/about">About</Link></button><button> <Link to="/">Home</Link></button>
    </div>
  );
}

export default Contact;
