import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Homepage';
import Portfolio from '../src/components/porfolio';
import About from '../src/components/about';
import Team from '../src/components/team';
import Services from '../src/components/services';
import Contact from '../src/components/contact';
import Gallery from '../src/components/gallery'; // make sure the path to the Gallery component is correct

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} /> {/* This is the new Route for the Gallery */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
