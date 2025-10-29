// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Product from './components/Product'
// import Pricing from './components/Pricing';
// import Footer from './components/Footer';
// import Contact from './components/Contactus';
// import Resources from './components/Resources';
// import Aboutus from './components/Aboutus';
// import Terms from './components/Terms';
// import Privacy from './components/Privacypolicy ';
// import Security from './components/Security';
// import Cookies from './components/Cookiepolicy';

// function App() {
//   return (
//     <Router basename="/AiEvoked">
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product" element={<Product />} />
//           <Route path='/pricing' element = {<Pricing/>} />
//           <Route path='/contact' element = {<Contact/>}/>
//           <Route path='/resources' element = {<Resources/>}/>
//           <Route path='/aboutus' element = {<Aboutus/>}/>
//           <Route path = '/terms' element = {<Terms/>}/>
//           <Route path = '/privacy' element = {<Privacy/>}/>
//           <Route path = '/cookies' element = {<Cookies/>}/>
//           <Route path = '/security' element = {<Security/>}/>
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Contact from './components/Contactus';
import Resources from './components/Resources';
import Aboutus from './components/Aboutus';
import Terms from './components/Terms';
import Privacy from './components/Privacypolicy';
import Security from './components/Security';
import Cookies from './components/Cookiepolicy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/security" element={<Security />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
