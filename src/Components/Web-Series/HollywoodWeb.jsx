import React from "react";
import { Card, Button } from "antd";

import Got from '../../images/Got.jpg';
import Witcher from '../../images/Witcher.jpg'

const HollywoodWeb = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Got}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Game Of Thrones</h3>
            <p>
              Nine noble families fight for control over the lands of Westeros,
              while an ancient enemy returns after being dormant for a
              millennia.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="primary">Contributed by Vikhyat Singh</Button>
            </div>
          </div>
        </div>
      </Card>

      
       {/* Card 2 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Witcher}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>The Witcher</h3>
            <p>
             Geralt of Rivia, a solitary monster hunter, struggles to find his place 
              in a world where people often prove more wicked than beasts.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                  <a
            href='https://github.com/PrinceSingh12398'
            target="_blank"
            rel="noopener noreferrer"
          >
              <Button type="primary">Contributed by Prince Singh</Button>
                    </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default HollywoodWeb;
