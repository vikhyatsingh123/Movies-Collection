import React from "react";
import { Card } from "antd";
import Search from '../Search';

import Inception from '../../images/inception.jpg';
import Avatar from '../../images/avatar.jpg';
import Dune from '../../images/dune.jpg';
import EndGame from '../../images/end.jpg';
import Memento from '../../images/Memento.jpg'
import dark_knight from '../../images/dark_knight.jpg'
import avater2 from '../../images/avater2.png'
import Oppenheimer from '../../images/Oppenheimer.png'
import Barbie from '../../images/Barbie.png'
import GOTG3 from '../../images/GOTG3.png'
import JW4 from '../../images/JW4.png'
import MI7 from '../../images/MI7.png'
import AM3 from '../../images/AM3.png'
import TRB from '../../images/TRB.png'
import Shazam2 from '../../images/Shazam2.png'
import Blue_Beetle from '../../images/Blue_Beetle.png'
import interstellar from '../../images/interstellar.jpg'
import wonder from '../../images/wonder.jpg'
import source_code from '../../images/source_code.jpg'
import lalaland from '../../images/lalaland.jpg'

const Hollywood = () => {
  return (
    <>

<Search/>
      {/* Card 1 */}
      <Card id="inception">
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
      <Card id="avatar">
        <div style={{ display: "flex", alignItems: "center", padding: "0" }}>
          <div className="fade-img" style={{ flex: 1, maxWidth: "100%", height: "100%" /*border:"1px red solid"*/, margin: "0" }}>
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
      <Card id="dune">
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
      <Card id="endgame">
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
      <Card id="memento">
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
      <Card id="the dark knight">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={dark_knight}
              alt="Memento"
              style={{ height: "150px", width: "100px" }}
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

      {/* CARD_NUMBER 7*/}
      <Card id="avatar 2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={avater2}
              alt="Avatar: The Way of Water"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Avatar: The Way of Water</h3>
            <p>
              Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.

            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a

                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>

              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* CARD_NUMBER 8*/}
      <Card id="oppenheimer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Oppenheimer}
              alt="Oppenheimer"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Oppenheimer</h3>
            <p>
              During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.

            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a

                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>

              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* CARD_NUMBER 9*/}
      <Card id="barbie">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Barbie}
              alt="Barbie"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Barbie</h3>
            <p>
              Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.

            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>

              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* CARD_NUMBER 10*/}
      <Card id="guardians of the galaxy vol 3">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>

            <img src={GOTG3}
              alt="GOTG3"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Guardians of the Galaxy Vol. 3</h3>
            <p>
              Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.

            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a

                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* CARD_NUMBER 11*/}
      <Card id="john wick">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={JW4}
              alt="JW4"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>John Wick: Chapter 4</h3>
            <p>
              With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* CARD_NUMBER 12*/}
      <Card id="mission impossible dead reckoning part one">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={MI7}
              alt="MI7"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Mission: Impossible – Dead Reckoning Part One</h3>
            <p>
              Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>

        {/* CARD_NUMBER 13*/}
        <Card id="ant man 3">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={AM3}
              alt="AM3"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Ant-Man and the Wasp: Quantumania</h3>
            <p>
            Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>

        {/* CARD_NUMBER 14*/}
        <Card id="transformers rise of the beasts">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TRB}
              alt="TRB"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Transformers: Rise of the Beasts</h3>
            <p>
            Optimus Prime and the Autobots team up with a down on his luck young man, an aspiring historian and with a powerful faction of Transformers known as the Maximals to combat a sinister force from outer space that threatens the Earth and all of mankind.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>

          {/* CARD_NUMBER 15*/}
          <Card id="shazam 2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Shazam2}
              alt="Shazam2"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Shazam! Fury of the Gods</h3>
            <p>
            Shazam and his superpowered foster siblings band together to face the Daughters of Atlas, who have stolen the Wizard's staff and plan to use it for their own ends.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
       {/* CARD_NUMBER 16*/}
       <Card id="blue beetle">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Blue_Beetle}
              alt="Blue Beetle"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Blue Beetle</h3>
            <p>
            Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Surajit0573'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
  {/* CARD_NUMBER 17*/}
      <Card id="memento">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={interstellar}
              alt="Memento"
              style={{height: "150px",width:"100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Interstellar</h3>
            <p>
            Interstellar is a sci-fi epic directed by Christopher Nolan, exploring the human struggle for survival as a team of astronauts embarks on a daring interstellar journey to find a new habitable planet for humanity.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Preeti8021'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Preeti Kintali</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 18*/}
      <Card id="source code">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={source_code}
              alt="Memento"
              style={{height: "150px",width:"100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Source Code</h3>
            <p>
            Source Code is a mind-bending sci-fi thriller directed by Duncan Jones, where a soldier uses advanced technology to repeatedly relive the last 8 minutes of a commuter's life to prevent a devastating terrorist attack.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Preeti8021'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Preeti Kintali</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 19*/}
      <Card id="wonder">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={wonder}
              alt="Memento"
              style={{height: "150px",width:"100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Wonder</h3>
            <p>
            Wonder is a heartwarming film depicting the inspiring journey of a boy with facial differences as he faces the challenges of acceptance and friendship in the demanding world of school.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Preeti8021'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Preeti Kintali</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 20*/}
      <Card id="la la land">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={lalaland}
              alt="Memento"
              style={{height: "150px",width:"100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>La La Land</h3>
            <p>
            La La Land skillfully depicts the struggles of a jazz musician and an aspiring actress as they navigate the fine line between career ambitions and the intricacies of love against the lively backdrop of Los Angeles.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/Preeti8021'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-dark gitbtn">Contributed by Preeti Kintali</button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Hollywood;
