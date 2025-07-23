import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Products from './Screens/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './Screens/Single';
// // import HeroCarousel from './Components/HeroCarousel/HeroCarousel';
import Categories from './Components/Categories/Categories';
import FlashSale from './Components/FlashSale/FlashSale';

// import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import TopBar from './Components/TopBar/TopBar';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import Slider from './Components/Slider/Slider';


const App = () => {
    return (
        <Routes>
      <Route path='/' 
      element={<Home />}/>
      
      <Route path='/products' 
      element={<Products />}/>
      
      <Route path='/product/:id' 
      element={<SingleProduct />}/>

        <Route path='/' 
      element={<TopBar />}/>
        
        <Route path='/' 
      element={<MainNavbar />}/>
            <Route path='/' 
      element={<Slider />}/>
            

            {/* <HeroCarousel /> */}
            {/* <Banner /> */}
            <Route path='/' 
      element={< Categories/>}/>
            <Route path='/' 
      element={< FlashSale/>}/>

            <Route path='/' 
      element={< Footer/>}/> 

             
        </Routes>
    );
};

export default App;
