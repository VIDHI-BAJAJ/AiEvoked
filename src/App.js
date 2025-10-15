import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Company from './components/Company';
import Resources from './components/Resources';
import Documentations from './components/Documentations';


function App() {
  return (
    <Router basename="/AiEvoked">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/pricing' element = {<Pricing/>} />
          <Route path='/company' element = {<Company/>}/>
          <Route path='/resources' element = {<Resources/>}/>
          <Route path='/documentation' element = {<Documentations/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
