import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-500 text-white font-bold p-8">
        <a href="/" className="">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/services">Service</a>
      </nav>
    </>
  );
}

export default Navbar