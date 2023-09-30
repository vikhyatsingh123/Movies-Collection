import React from "react";
import { Card, Button } from "antd";

import Scam from '../../images/scam.jpg';

const BollywoodWeb = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Scam}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Scam</h3>
            <p>
             Born in Khanapur in Karnataka, Telgi became the mastermind behind 
             one of the most ingenious schemes in Indian history that spread across
              multiple states and shook the entire country.
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
    </>
  )
};

export default BollywoodWeb;
