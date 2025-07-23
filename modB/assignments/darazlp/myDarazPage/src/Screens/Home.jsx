
import TopBar from "../Components/TopBar/TopBar"
import Products from '../Screens/Product'
// import SingleProduct from '../Screens/Single';
// // import HeroCarousel from './Components/HeroCarousel/HeroCarousel';
import Categories from '../Components/Categories/Categories';
import FlashSale from '../Components/FlashSale/FlashSale';

// import Banner from './Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import MainNavbar from '../Components/MainNavbar/MainNavbar';
import Slider from '../Components/Slider/Slider';
let Home=()=>{
    return(
        <>
        <TopBar />
        <MainNavbar />
        <Slider />
        <Categories />
        <FlashSale />
        <Products />
        {/* <SingleProduct /> */}
        <Footer />

        </>
    )
}
export default Home;