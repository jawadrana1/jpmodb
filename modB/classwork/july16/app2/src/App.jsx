import { useState } from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Notfound from './Screens/Notfound'
import Products from './Screens/Products'



function App() {


  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products/:id" element={<Products/>}/>
    <Route path="/products" element={<Products/>}/>

    <Route path="*" element={<Notfound/>}/>
   </Routes>
    
  )
}

export default App
