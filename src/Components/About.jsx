import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "./About.css"
const About = () => {
return (
    <>
    <Navbar/>
    <div className="about_back">
      <div className="about_div">
        <h1>Movies</h1>
        <h2>Collection</h2>
        <p><strong>Welcome to Movies Collection</strong>, where passion meets the magic of cinema! 
        Our mission is to provide a seamless, immersive experience for movie enthusiasts. Explore our carefully organized library and discover recommendations tailored to your taste..
        </p>
        <Link to="/"><button>Explore&nbsp;&nbsp;&#8594;</button></Link>
      </div>
      <div className='about_side'>
        <img src={require('../images/about_side.png')} alt="" />
      </div>
    </div>
    </>
)
}

export default About;