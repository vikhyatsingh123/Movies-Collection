import React from "react";
import { Card, Button } from "antd";

import Rrr from '../../images/rrr.jpg';

const Tollywood = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Rrr}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>RRR</h3>
            <p>
              A fearless revolutionary and an officer in the British force, who
              once shared a deep bond, decide to join forces and chart out an
              inspirational path of freedom against the despotic rulers.
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

export default Tollywood;
