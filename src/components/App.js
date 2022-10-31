// import styles
import './../css/styles.css';
// import dependacies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import Footer from './Footer'
import Navbar from './Navbar'
// import pages
import Home from './../pages/Home'
import Artists from './../pages/Artists'
import ArtistItem from './../pages/ArtistItem'
import GenreItems from './../pages/GenreItems'
// shop pages
import StoreFront from '../pages/shop/StoreFront'
import Product from '../pages/shop/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<ArtistItem />} />
        <Route path="/genre/:id" element={<GenreItems />} />
        {/* shop routes */}
        <Route path="/shop" element={<StoreFront />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
