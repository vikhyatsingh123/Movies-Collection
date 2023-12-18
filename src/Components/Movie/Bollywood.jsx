import React from "react";
import { Card, Button } from "antd";

import War from '../../images/war.jpg';

const Bollywood = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={War}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>War</h3>
            <p>
              An Indian soldier is assigned to eliminate his former mentor and
              he must keep his wits about him if he is to be successful in his
              mission; when the two men collide, it results in a barrage of
              battles and bullets.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Vikhyat Singh</Button>
            </div>
          </div>
        </div>
      </Card>
      
    </>
  );
};

export default Bollywood;
