import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div id="hero-img">
          <div id="hero-text">
            <h1>Find and book hotels in Nigeria.</h1>
            <p>Search through 13,624 hotels in Nigeria</p>
          </div>
          <div id="banner" className="shadow-lg">
            <input type="text" placeholder="Search" />
            <input type="date" name="" id="" />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-xl">Find Location</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
