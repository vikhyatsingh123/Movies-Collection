import React from "react";
import { Carousel } from "antd";
import MyTabs from "./MyTabs";

import '../styles/styles.css';

import hollywood from '../images/hollywood.png';
import bollywood from '../images/bollywood.webp';
import tollywood from '../images/tollywood.webp';



const Home = ( ) => {

  const carouselContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '400px',
    marginBottom: '20px', // Adjust as needed
  };

  const carouselStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))', // Fading black gradient
    zIndex: 1,
  };

  const overlayTextStyle = {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    // Adjust the text color as needed
    fontSize: '55px', // Increased font size
    fontWeight: '900',
  };

    return (
      <>
   
     
   <div style={carouselContainerStyle}>
      <Carousel autoplay>
      <div>
            <img src={hollywood} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={bollywood} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={tollywood} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
      </Carousel>
      <div style={overlayContainerStyle}></div>
      <div style={overlayTextStyle} className="carouseltext">MOVIES COLLECTION<div className="titletext">Watch Your Favourite movie Shows and Webseries here!!!</div> </div>
      

    </div>
  
        <br />
      <MyTabs/>

      
      </>
    );

}

export default Home;