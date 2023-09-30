import React from "react";
import { Carousel } from "antd";
import { Tabs } from "antd";

import '../styles/styles.css';
import Navbar from './Navbar';
import Hollywood from './Movie/Hollywood';
import Bollywood from './Movie/Bollywood';
import Tollywood from './Movie/Tollywood';
import HollywoodWeb from './Web-Series/HollywoodWeb';
import BollywoodWeb from './Web-Series/BollywoodWeb';
import hollywood from '../images/hollywood.png';
import bollywood from '../images/bollywood.webp';
import tollywood from '../images/tollywood.webp';

const { TabPane } = Tabs;

const Home = ( ) => {
    const items = [
      {
        key: "1",
        label: "Movies",
        children: [
          {
            key: "1-1",
            label: "Hollywood",
            content: <Hollywood/>,
          },
          {
            key: "1-2",
            label: "Bollywood",
            content: <Bollywood/>,
          },
          {
            key: "1-3",
            label: "Tollywood",
            content: <Tollywood/>,
          },
        ],
      },
      {
        key: "2",
        label: "Web Series",
        children: [
          {
            key: "2-1",
            label: "Hollywood",
            content: <HollywoodWeb/>,
          },
          {
            key: "2-2",
            label: "Bollywood",
            content: <BollywoodWeb/>,
          },
        ],
      },
    ];

    return (
      <>
        <Navbar />
        <Carousel autoplay>
          <div>
            <img src={hollywood} style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
            <img src={bollywood} style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
            <img src={tollywood} style={{ width: "100%", height: "400px" }} />
          </div>
        </Carousel>
        <br />
        <Tabs defaultActiveKey="1" type="card">
          {items.map((item) => (
            <TabPane tab={item.label} key={item.key}>
              <Tabs defaultActiveKey="1-1" type="card">
                {item.children.map((childItem) => (
                  <TabPane tab={childItem.label} key={childItem.key}>
                    {childItem.content}
                  </TabPane>
                ))}
              </Tabs>
            </TabPane>
          ))}
        </Tabs>
      </>
    );

}

export default Home;