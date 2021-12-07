import react from "react";
import "./App.css";
import IntroCard from "./components/IntroCard";
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import About from "./pages/About"
import Services from "./pages/Services"
import Project_data from "./components/Project_data.js"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
import ScrolltoTop from "./components/ScrolltoTop";
import img1 from "./images/sahin.jpg"
import Particle from "./components/Particle"

const App = () => {
  return (
    
 <div className="main"  id="main">
    <Navbar/>
    <MobileMenu/>
    <ScrolltoTop/>
    
  <div className="contaner" > 
  <div className="particle">
    <Particle/>
  </div>
  
     <div className="row">
      
          <div className="col-1">
              <IntroCard/>
          </div>
          <div className="col-2">
              <img id="img" src={img1} alt=""/>
          </div>
    </div>
  </div>
  
    <About/>
    
    <Services/>
    <Project_data/>
    <Portfolio/>
    <div className="cont"><Contact/></div>
</div>


    
    
  
    
  )
}

export default App
