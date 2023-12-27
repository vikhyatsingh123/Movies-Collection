import React from "react";
import { Card, Button } from "antd";
import Search from '../Search';

import Scam from '../../images/scam.jpg';
import FamilyMan from '../../images/FamilyMan.jpg';
import SacredGames from '../../images/SacredGames.jpg';


const BollywoodWeb = () => {
  return (
    <>
    <Search/>
      {/* Card 1 */}
      <Card id="scam">
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
              <Button type="btn btn-outline-dark gitbtn">Contributed by Vikhyat Singh</Button>
            </div>
          </div>
        </div>
      </Card>
      {/* Card 2 */}
      <Card id="family man">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={FamilyMan}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>The Family Man</h3>
            <p>
            An edgy action-drama series which tells the story of a middle-class man who works for a special cell of the National Investigation Agency. 
            While he tries to protect the nation from terrorists, he also must protect his family from the impact of his secretive, high-pressure, and low-paying job.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}  
            >
            <a
            href='https://github.com/Blaster2398'
            target="_blank"
            rel="noopener noreferrer"
          ></a>
              <Button type="btn btn-outline-dark gitbtn">Contributed by Aryan Patel</Button>
            </div>
          </div>
        </div>
      </Card>
        {/* CARD 3 */}
        <Card id="sacred games">
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={SacredGames}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Sacred Games</h3>
                    <p>
                        When police officer Sartaj Singh receives an anonymous tip
                        about the location of criminal overlord Ganesh Gaitonde,
                        he embarks on a chase around Mumbai in what becomes a
                        dangerous cat-and-mouse game.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aeyazadil'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aeyaz Adil</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </>
  )
};

export default BollywoodWeb;
