
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="flex-auto">
       <HeaderTop />
       <HeaderMain />
       <Navbar />
       <Hero />
       <NewProducts/>
       <Footer/>
    </div>
  );
}
