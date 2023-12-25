import React from "react";
import { Carousel } from "antd";
import MyTabs from "./MyTabs";
import { motion } from "framer-motion";
import '../styles/styles.css';
import CardBanner from "./CardBanner";
import hollywood from '../images/hollywood.png';
import bollywood from '../images/bollywood.webp';
import tollywood from '../images/tollywood.webp';
import img1 from '../images/b1.jpg';
import img2 from '../images/b2.jpg';
import img3 from '../images/b3.jpg';
import img4 from '../images/b4.jpg';
import img5 from '../images/b5.jpg';
import img6 from '../images/b6.jpg';
import img7 from '../images/b7.jpg';
import img8 from '../images/b8.jpg';

 

import SuggestModal from "./SuggestModal";


const Home = ({modal,closeModal} ) => {
 const bannerData=[
    {
      title:"Bollywood Blockbusters",
      description:"Experience the magic of Indian cinema with our handpicked Bollywood hits.",
      image:img1,
    },{
      title:"Hollywood Hits Extravaganza",
      description:"Dive into the glitz and glamour of Hollywood with our blockbuster movie picks",
      image:img2,
    },{
      title:"Action-packed Adventures",
      description:"Witness adrenaline-pumping action in Tollywood's blockbuster hits.",
      image:img3,
    },{
      title:"Chill & Thrill",
      description:"Combine chilling tales and thrilling adventures for the perfect movie night.",
      image:img4,
    },{
      title:"Cinematic Surprises",
      description:"Discover the unexplored treasures of world cinema in these hidden gems.",
      image:img5,
    },{
      title:"Childhood Chronicles",
      description:"Revisit your youth with movies that made growing up a delightful adventure.",
      image:img6,
    },{
      title:"Drama Unfolded",
      description:"Explore intense and captivating dramas in Bollywood's web series",
      image:img7,
    },{
      title:"Mystery Unleashed",
      description:"Unlock the secrets of gripping mysteries in Hollywood's web series.",
      image:img8,
    },
  ]

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
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
      <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-12 mt-10 font-mono">Find your Entertainment...</h1>
      </div>
      <CardBanner data={bannerData} />
    </motion.div>
      <MyTabs/>

      </>
    );

}

export default Home;