// import styles
import './../css/styles.css';
// import components
import Hero from './Hero'
import Footer from './Footer'
import Navbar from './Navbar'
// import pages
import Home from './../pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;
