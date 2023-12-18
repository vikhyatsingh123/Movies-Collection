import React from "react";
import { Card } from "antd";

import Inception from '../../images/inception.jpg';
import Avatar from '../../images/avatar.jpg';
import Dune from '../../images/dune.jpg';
import EndGame from '../../images/end.jpg';
import Memento from '../../images/Memento.jpg'
import dark_knight from '../../images/dark_knight.jpg'


const Hollywood = () => {
  return (
    <>


      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }} >
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
                <button className="btn btn-outline-dark gitbtn" >Contributed by Vikhyat Singh</button>
              </a>
            </div>
          </div>
        </div>
      </Card>


      {/* Card 2 */}
      <Card >
        <div style={{ display: "flex", alignItems: "center" ,padding : "0"}}>
          <div className="fade-img" style={{ flex: 1,maxWidth: "100%", height: "100%" /*border:"1px red solid"*/ ,margin: "0"}}>
            <img
            className="img"
              src={Avatar}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px", /*borderRadius: "10px"*/ }}
         
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
                <button className="btn btn-outline-dark gitbtn">Contributed by Prince Singh</button>
              </a>
            </div>
          </div>
        </div>
      </Card>


      {/* Card 3 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Dune}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Dune</h3>
            <p>
              American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth.
              Set in the far distant future, in a post-artificial intelligence universe, the film follows Paul Atreides as his family,
              the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis.
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
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Aryan Patel</button>
              </a>
            </div>
          </div>
        </div>
      </Card>


      {/* Card 4 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={EndGame}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>End Game</h3>
            <p>
              After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again
              to reinvigorate their trounced allies and restore balance.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/sami3160'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Sami Bhadgaonkar</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 5 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Memento}
              alt="Memento"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Memento</h3>
            <p>
              Memento's story follows Shelby, who has short-term memory loss following a break-in at his house in which his wife was raped and murdered and a blow to the head that gave Shelby his "condition." Leonard has been chasing the guy who did it, but his search is complicated by the fact that he can't make new memories since the accident.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/saurabhgdeshmukh'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Saurabh Deshmukh</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 6*/}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={dark_knight}
              alt="Memento"
              style={{height: "150px",width:"100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>The Dark Knight</h3>
            <p>
              In the second part of Batman Triology,Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/YashSachan2'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Yash Sachan</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Hollywood;
