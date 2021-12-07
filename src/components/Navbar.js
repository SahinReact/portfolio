
import reactDom from "react-dom";
import React from 'react'
import "./navbar.css"
import { Link, animateScroll as scroll, ScrollLink } from "react-scroll";

const Navbar = ()=> {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  

    return (
        <>
           <nav className="navbar">
    <div className="logo">
      <button onClick={scrollToTop}><h2>COD<span className="E"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 31 36">
  <g id="Group_204" data-name="Group 204" transform="translate(-429.5 -114.5)">
    <line id="Line_32" data-name="Line 32" x2="31" transform="translate(429.5 118.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
    <line id="Line_33" data-name="Line 33" x2="31" transform="translate(429.5 132.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
    <line id="Line_34" data-name="Line 34" x2="31" transform="translate(429.5 146.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
  </g>
</svg>
</span>R</h2></button>
    </div>
    <div className="item">
      
          <Link 
          activeClass="active"
          to="about"
          spy={false}
          smooth={true}
          offset={-110}
          duration={500} className="fil">About Me</Link>
          <Link
          activeClass="active"
          to="services"
          spy={false}
          smooth={true}
          offset={-100}
          duration={500} className="normal">Services</Link>
          <Link
          activeClass="active"
          to="portfolio"
          spy={false}
          smooth={true}
          offset={-100}
          duration={500} className="normal">Portfolio</Link>
         <Link
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={-80}
          duration={500} className="normal">Contact Us</Link>
   
          </div>
      </nav>  
      </>

    )
}

export default Navbar
