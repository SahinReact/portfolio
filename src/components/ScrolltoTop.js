import React from 'react'
import "../components/scrolltoTop.css"
import img1 from "../images/up-arrow.png"
import { Link, animateScroll as scroll, ScrollLink } from "react-scroll";


function ScrolltoTop() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div onClick={scrollToTop} className="scroll">
            <img src={img1} alt="" />
        </div>
    )
}

export default ScrolltoTop
