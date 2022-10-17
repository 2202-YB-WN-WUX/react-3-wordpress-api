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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
