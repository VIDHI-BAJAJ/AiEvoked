import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          {/* <Route path="/product" element={<div>Product Page</div>} />
          <Route path="/resources" element={<div>Resources Page</div>} />
          <Route path="/documentation" element={<div>Documentation Page</div>} />
          <Route path="/company" element={<div>Company Page</div>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;