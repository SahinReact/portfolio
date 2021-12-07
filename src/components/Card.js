import React from 'react'
import "./card.css"

const Card = (props) => {
    return (
        <div className="portfolio_card">
            <div className="cont1">
                <img  src={props.img} alt="" />
                <div className="info">
                    <h1>Heading</h1>
                    <p>this is the portfolio for a demo click the button</p>
        
                    <button className="btn6">Preview</button>
                </div>

            </div>
          
          
            
            
        
       </div>
    )
}

export default Card
