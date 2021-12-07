
import reactDom from "react-dom";
import React from 'react'
import "./navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll, ScrollLink } from "react-scroll";

const MobileMenu = ()=> {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const[open,setOpen]=React.useState(false);
 const icon_open=<FaBars className="nav_bar_icon" size="30px"
    onClick={()=>setOpen(!open)}/>

   const icon_close=<FaTimes className="nav_bar_icon" size="30px"
    onClick={()=>setOpen(!open)}/>

    return (
        <>
           <nav className="Mobile_nav">
        {open ? icon_close : icon_open}
    <span className="Mobile_logo">
      <button onClick={scrollToTop}><h2>COD<span className="E"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 31 36">
  <g id="Group_204" data-name="Group 204" transform="translate(-429.5 -114.5)">
    <line id="Line_32" data-name="Line 32" x2="31" transform="translate(429.5 118.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
    <line id="Line_33" data-name="Line 33" x2="31" transform="translate(429.5 132.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
    <line id="Line_34" data-name="Line 34" x2="31" transform="translate(429.5 146.5)" fill="none" stroke="#F0A500" stroke-width="8"/>
  </g>
</svg>
</span>R</h2></button>
</span>
    {open &&
    <div  className="item">
      
          <Link onClick={()=>{setOpen(false)}}
          activeClass="active"
          to="main"
          spy={false}
          smooth={true}
          offset={-110}
          duration={500} className="normal">About Me</Link>
          <Link onClick={()=>{setOpen(false)}}
          activeClass="active"
          to="services"
          spy={false}
          smooth={true}
          offset={-100}
          duration={500} className="normal">Services</Link>
          <Link onClick={()=>{setOpen(false)}}
          activeClass="active"
          to="portfolio"
          spy={false}
          smooth={true}
          offset={-100}
          duration={500} className="normal">Portfolio</Link>
         <Link onClick={()=>{setOpen(false)}}
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={-80}
          duration={500} className="normal">Contact Us</Link>
   
          </div>
}
      </nav>  
      </>

    )
}

export default MobileMenu