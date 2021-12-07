
import React from 'react'
import "./services.css"
import ProjectCard from '../components/ProjectCard'
import img1 from "../images/html.png"
import img2 from "../images/css.png"
import img3 from "../images/javascript.png"
import img4 from "../images/react.png"
import img5 from "../images/php.png"
import img6 from "../images/photoshop.png"


const Services = () => {
    return (
    <div className="services" id="services">
            <div className="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="35" viewBox="0 0 2 95">
                    <path id="Path_36851" data-name="Path 36851" d="M0,0V95" transform="translate(1)" fill="none" stroke="#ff4900" stroke-width="2" stroke-dasharray="10"/>
                </svg>
            
            <h2>Our Services</h2>
            <div className="text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the 
                quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="card_position">
                        <ProjectCard img={img1} name="HTML"/>
                        <ProjectCard img={img2}name="CSS"/>
                        <ProjectCard img={img3}name="JAVASCRIPT"/>
                        <ProjectCard img={img4}name="REACTJs"/>
                        <ProjectCard img={img5}name="PHP"/>
                        <ProjectCard img={img6}name="PHOTOSHOP"/>
                </div>
            
            </div>
           
    </div>
            )
}

export default Services
