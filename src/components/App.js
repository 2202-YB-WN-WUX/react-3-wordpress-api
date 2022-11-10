// import styles
import './../css/styles.min.css';
// import dependacies
import { HashRouter, Routes, Route } from "react-router-dom";

// import components
import Footer from './Footer'
import Navbar from './Navbar'
// import pages
import Home from './../pages/Home'
import Artists from './../pages/Artists'
import ArtistItem from './../pages/ArtistItem'
import GenreItems from './../pages/GenreItems'
import NewsItem from '../pages/NewsItem';
import Contact from '../pages/Contact';
// shop pages
import StoreFront from '../pages/shop/StoreFront'
import Product from '../pages/shop/Product';
// search results
import SearchResults from '../pages/SearchResults';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<ArtistItem />} />
        <Route path="/genre/:id" element={<GenreItems />} />
        <Route path="/news/:id" element={<NewsItem />} />
        <Route path="/contact" element={<Contact />} />
        {/* shop routes */}
        <Route path="/shop" element={<StoreFront />} />
        <Route path="/product/:id" element={<Product />} />
        {/* search route */}
        <Route path="/search-results/:searchString" element={<SearchResults />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
