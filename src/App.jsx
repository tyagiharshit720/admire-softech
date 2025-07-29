import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import ApplicationForm from './forms/ApplicationForm';

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/application-form" element={<ApplicationForm />} />



        
        

        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;