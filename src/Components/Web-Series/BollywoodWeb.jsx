import React from "react";
import { Card, Button } from "antd";

import Scam from '../../images/scam.jpg';
import FamilyMan from '../../images/FamilyMan.jpg';
import SacredGames from '../../images/SacredGames.jpg';
import mirzapur from '../../images/mirzapur.jpg';
import scam1992 from '../../images/scam1992.jpg';
import aspirants from '../../images/aspirants.jpg';
import panchayat from '../../images/panchayat.jpeg';
import gullak from '../../images/gullak.avif';
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
              <Button type="btn btn-outline-dark gitbtn">Contributed by Vikhyat Singh</Button>
            </div>
          </div>
        </div>
      </Card>
      {/* Card 2 */}
      <Card>
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
        <Card>
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
        <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={mirzapur}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Mirzapur</h3>
            <p>
            A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">Contributed by PSS2134</Button>
            </a>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={scam1992}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Scam 1992: The Harshad Mehta Story</h3>
            <p>
            The rise and fall of Harshad Mehta, a stockbroker who single-handedly took the stock market to great heights, is depicted. 
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">Contributed by PSS2134</Button>
            </a>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={aspirants}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Aspirants</h3>
            <p>
            It is the story of the journey of three UPSC (public service competitive exams in India) aspirants and their friendship against all odds. 
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">Contributed by PSS2134</Button>
            </a>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={panchayat}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Panchayat</h3>
            <p>
            A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh. 
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">Contributed by PSS2134</Button>
            </a>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={gullak}
              alt="Image"
              style={{ maxWidth: "70%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Gullak</h3>
            <p>
            Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">Contributed by PSS2134</Button>
            </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
};

export default BollywoodWeb;
