import React from "react";
import { Card, Button } from "antd";

import War from '../../images/war.jpg';
import Animal from '../../images/Animal.png';
import Golmaal from '../../images/Golmaal.jpg';
import Sholay from '../../images/Sholay.jpg';
import GOV from '../../images/GOV.jpg';
import krish from '../../images/krish.jpg';

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
      
      {/* Card 2 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Animal}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Animal</h3>
            <p>
              Movie depicting an emotional relation between father and son.
              Ranbir Kapoor as son is ready to do anything for his Father and
              this leads to bruttle fight scenes.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Vivek Singh</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 3 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Golmaal}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Golmaal 3</h3>
            <p>
            Four runaway crooks take shelter in a bungalow which is owned by a blind couple..
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya Gaikwad</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 4 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Sholay}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Sholay</h3>
            <p>
            After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya Gaikwad</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 6 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={GOV}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Gangs of Wasseypur II</h3>
            <p>
            A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya Gaikwad</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 5 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={krish}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Krrish</h3>
            <p>
              Krishna is forced by circumstances to use his superpowers and become the masked superhero Krrish, before getting drawn towards his lost legacy.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya Gaikwad</Button>
            </div>
          </div>
        </div>
      </Card>
      
    </>
  );
};

export default Bollywood;
