import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar  from "./components/Navbar"
import Services from "./pages/Services"
import ProductDetail from "./components/ProductDetail";
// import Button from './components/Button'
// import Card from './components/Card'
// import Form from './components/Form'
// import Navbar from './components/Navbar'
// import Profile from './components/Profile'
// import { FaCarAlt } from 'react-icons/fa'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar />
   <Button name="Login"  icon={<FaCarAlt />}/>
   <Button name="Sign up" />
   <Button name="Buy Now" />
   <Profile />
   <Card />
   <Form /> */}
    </>
  );
}

export default App;
