import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router';
import Home from "./components/Home.jsx";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
