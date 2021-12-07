
import reactDom from "react-dom";
import React from 'react'
import "./introCard.css";
import { saveAs } from "file-saver";

const IntroCard = () => {
    const saveFile = () => {
        saveAs(
            "/public/images/CV.pdf" ,"CV.pdf"
          );
      }
    return (
        <>
        <div className="card1">
            
       
           <button className="svg">Hello, I am<div className="trangal">
       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 29 31">
        <path id="Polygon_1" data-name="Polygon 1"d="M13,0,26,23H0Z" transform="translate(24 23) rotate(180)" fill="#F0A500" background="#11111"/>
        </svg>
        </div></button>
        
      
       
           <h1>Mr. Sahin Aktar Mondal</h1>
           <h3>I am a Fresher</h3>
        
        <button className="btn1" onClick={saveFile}>Download CV</button>
        <button className="btn2" >My Work</button>
        </div>
        </>
    )
}

export default IntroCard
