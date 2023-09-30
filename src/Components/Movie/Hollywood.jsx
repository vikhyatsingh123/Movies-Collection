import React from "react";
import { Card, Button } from "antd";

import Inception from '../../images/inception.jpg';
import Avatar from '../../images/avatar.jpg';

const Hollywood = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Inception}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Inception</h3>
            <p>
              Cobb steals information from his targets by entering their dreams.
              Saito offers to wipe clean Cobb's criminal history as payment for
              performing an inception on his sick competitor's son.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <a
            href='https://github.com/vikhyatsingh123'
            target="_blank"
            rel="noopener noreferrer"
          >
              <Button type="primary">Contributed by Vikhyat Singh</Button>
                 </a>
            </div>
          </div>
        </div>
      </Card>
       {/* Card 2 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Avatar}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Avatar</h3>
            <p>
            Jake Sully and Ney'tiri have formed a family and are doing everything to stay together.
            However, they must leave their home and explore the regions of Pandora. When an ancient 
            threat resurfaces, Jake must fight a difficult war against the humans.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               <a
            href='https://github.com/singhprince12346'
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

export default Hollywood;
