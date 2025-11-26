import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-500 text-white font-bold p-8">
        <a href="/" className="">
          Home
        </a>
       <NavLink to="/about" >About</NavLink>
       <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/services">Services</NavLink>
        {/* <a href="/contact">Contact</a>
        <a href="/services">Service</a> */}
      </nav>
    </>
  );
}

export default Navbar