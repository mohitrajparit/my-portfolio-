import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Design from './components/Design';
function App() {
  return (
    <div>
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow bg-opacity-80 backdrop-blur-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path='/design' element={<Design/>}/>
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>

      {/* Footer is always visible */}
      <Footer />
    </div>
    
  
  
  
  );
}

export default App;
