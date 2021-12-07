import React from 'react'
import Card from '../components/Card'
import "./portfolio.css"
import img1 from "../images/temp1.jpg"
import img2 from "../images/temp2.jpg"
import img3 from "../images/temp3.jpg"
import img4 from "../images/temp4.jpg"
import img5 from "../images/temp5.jpg"
import img6 from "../images/temp6.jpg"


const Portfolio = () => {
    
    return (
        <div className="portfolio" id="portfolio">
            
            <div className="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 95">
                    <path id="Path_36851" data-name="Path 36851" d="M0,0V95" transform="translate(1)" fill="none" stroke="#ff4900" stroke-width="2" stroke-dasharray="10"/>
                </svg>
            
            <h2>Our Portfolio</h2>
            <div className="text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the 
                quasi architecto beatae vitae dicta sunt explicabo.</p>
                
                </div>
                </div>
                <div className="portfolio_menu">
                    <ul className="portfolio_menu_ul">
                        <li className="org">All</li>
                        <li>Web development</li>
                        <li>HTML</li>
                        <li>UI/UX</li>
                        <li>Web design</li>
                    </ul>

                </div>
            <div className="card_comp">
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
                <Card img={img4}/>
                <Card img={img5}/>
                <Card img={img6}/>
               </div>
        </div>
    )
}

export default Portfolio
