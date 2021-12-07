import React from 'react'
import "../components/projectCard.css"
import img from "../images/arrow.png"


const projectCard = (props) => {
    return (
        
           <div className="card">
               <div className="icon_box">
                    <spam className="logo"><img src={props.img} alt=""  /></spam>
               </div>
               <spam className="skill">
                <h3>{props.name}</h3>
                <spam className="arrow"><img src={img} alt="" /></spam>
            </spam>

               
          
            </div> 
           
            
    )
}

export default projectCard
