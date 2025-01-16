import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Skills from './components/Skills';
import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
      
      {/* <Footer/> */}
    </>
      
  )
}

export default App
