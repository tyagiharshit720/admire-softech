import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />

        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;