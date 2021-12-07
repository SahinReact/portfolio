import React from 'react'
import "../pages/contact.css"
import img1 from "../images/facebook.png"
import img2 from "../images/instagram.png"
import img3 from "../images/linkedin.png"
import img4 from "../images/github.png"

import img5 from "../images/message.png"
import img6 from "../images/call.png"
import img7 from "../images/home.png"

const Contact = ( ) => {
    return (
        <div className="contact" id="contact">
            <div className="form">
                <div className="row1">
                    <div className="col3">
                        <h1>Contact Us</h1>
                        <p>Let's make something new, different and more meaningful
or make thing more visual or conceptual?</p>
                        <div className="contact_data"> 
                            <p>Email</p>
                            <img src={img5} alt="" />
                        <h5>Sahin.office24@gmail.com</h5>
                        </div>
                        <div className="contact_data">
                            <p>Phone No</p>
                            <img src={img6} alt="" />
                            <h5>+91 8617833233</h5>
                        </div>
                        <div className="contact_data">
                            <p>Address</p>
                            <img src={img7} alt="" />
                            <h5>......</h5>
                        </div>
                        <h3>Find me on</h3>
                        <div className="social">
                            <a href="https://www.facebook.com/profile.php?id=100047142172260"><img src={img1}  alt="" /></a>
                            <a href="https://www.instagram.com/sahin_aktar1/"><img src={img2}  alt="" /></a>
                        <a href="https://www.linkedin.com/in/sahin-aktar-mondal-83767b15a/"><img src={img3} alt="" /></a>
                        <a href="https://github.com/SahinReact"><img src={img4}  alt="" /></a>
                        
                        </div>
                    </div>
                    <div className="col4">
                    <h1>Drop a Line</h1>
                    <div className="input1">
                    
                        <input type="text" placeholder="Name" required />
                        
                   
                   
                        <input type="text" placeholder="Email" required />
                        
                
                    
                        <input type="text" placeholder="phone number" required />
                        
                        <textarea name="message" placeholder="Message" id="message" cols="30" rows="10"></textarea>
                        
                    
                    <button className="btn7">Submit</button>
                    </div>
                    
                </div>
                
            </div>
            </div>
            <div>
            <p className="copyRight">
            Copyright ©2021Sahin. All Rights Reserved.
            </p>
            </div>
        </div>
    )
}

export default Contact
