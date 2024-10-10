// App.jsx
import React from 'react';
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      
        <NavBar />
        <HeroSection />
        <Services />
        <About />
        <Contact />
        <Footer />
 
        <Toaster />
    </Router>
  );
};

export default App;
