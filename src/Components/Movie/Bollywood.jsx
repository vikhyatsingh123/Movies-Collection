import React from "react";
import { Card, Button } from "antd";
import Search from '../Search';

import War from '../../images/war.jpg';
import Animal from '../../images/Animal.png';
import Golmaal from '../../images/Golmaal.jpg';
import Sholay from '../../images/Sholay.jpg';
import GOV from '../../images/GOV.jpg';
import krish from '../../images/krish.jpg';
import Jawan from '../../images/Jawan.png';
import Pathaan from '../../images/Pathaan.png';
import Gadar2 from '../../images/Gadar2.png';
import Bholaa from '../../images/Bholaa.png';
import tiger3 from '../../images/tiger3.png';
import cvsn from '../../images/cvsn.png';
import Dunki from '../../images/Dunki.png';
import Sanju from '../../images/Sanju.png';
import _3Idiots from '../../images/3Idiots.png';
import pk from '../../images/pk.png';
import Lage_Raho_Munna_Bhai from '../../images/Lage_Raho_Munna_Bhai.png';
import mb_mbbs from '../../images/mb_mbbs.png';
import IB71 from '../../images/IB71.png';
import Khufiya from '../../images/Khufiya.png';
import Selfiee from '../../images/Selfiee.png';
import Fukrey3 from '../../images/Fukrey3.png';
import Dangal from '../../images/Dangal.png';
import Bajrangi_Bhaijaan from '../../images/Bajrangi_Bhaijaan.png';
import Kabir_Singh from '../../images/Kabir_Singh.png';
import TKF from '../../images/TKF.png';

const Bollywood = () => {
  return (
    
    <>
    <Search/>
      {/* Card 1 */}
      <Card id="war">
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
      <Card id="animal">
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
      <Card id="golmaal">
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
      <Card id="sholay">
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
      <Card id="gangs of wasseypur">
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
      <Card id="krrish">
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

      {/* CARD_NUMBER 6*/}
      <Card id="jawan">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Jawan}
              alt="Jawan"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Jawan</h3>
            <p>
              A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.
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

      {/* CARD_NUMBER 7*/}
      <Card id="pathaan">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Pathaan}
              alt="Pathaan"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Pathaan</h3>
            <p>
              A Pakistani general hires a private terror outfit to conduct attacks in India while Pathaan, an Indian secret agent, is on a mission to form a special unit.
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
      <Card id="gadar 2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Gadar2}
              alt="Gadar 2"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Gadar 2</h3>
            <p>
              When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.
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
      <Card id="bholaa">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Bholaa}
              alt="Bholaa"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Bholaa</h3>
            <p>
              After a decade-long prison sentence, an ex-convict endeavours to meet his daughter. However, he faces numerous obstacles during his journey
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
      <Card id="tiger">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={tiger3}
              alt="tiger 3"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              tiger 3 </h3>
            <p>
              Tiger 3 is a 2023 Indian Hindi-language action thriller film directed by Maneesh Sharma and produced by Aditya Chopra under Yash Raj Films. It stars Salman Khan, Katrina Kaif and Emraan Hashmi.
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
      <Card id="mrs chatterjee vs norway">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={cvsn}
              alt="Mrs. Chatterjee vs Norway"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Mrs. Chatterjee vs Norway </h3>
            <p>
              Debika Chatterjee, an Indian woman living in Norway with her family, fights to regain custody of her children after Norwegian authorities take them away from her.
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
      <Card id="dunki">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Dunki}
              alt="Dunki"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Dunki </h3>
            <p>
              A group of friends use a backdoor process to move to another country, then struggle to return home.
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
      <Card id="sanju">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Sanju}
              alt="Sanju"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              Sanju </h3>
            <p>
              Sanjay Dutt, an actor from the Bollywood film industry, struggles with the legacy that is handed down to him by his parents, along with his personal dilemmas and vices.
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
      <Card id="3 idiots">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={_3Idiots}
              alt="3 Idiots"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              3 Idiots</h3>
            <p>
              In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.
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
      <Card id="pk">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={pk}
              alt="pk"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
              PK</h3>
            <p>
            An innocent alien lands on Earth but loses his communication device. He meets Jaggu, a heartbroken reporter, and tries to find his device. With time, he raises many thought-provoking questions.
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
        <Card id="lage raho munna bhai">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Lage_Raho_Munna_Bhai}
              alt="Lage Raho Munna Bhai"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Lage Raho Munna Bhai</h3>
            <p>
            A gangster hopelessly falls in love with a radio jockey but lies to her about being a true Gandhian. Although he ends up hurting her, he also undergoes a change and genuinely begins helping people.
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
        <Card id="munna bhai mbbs">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={mb_mbbs}
              alt="mb_mbbs"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Munna Bhai M.B.B.S.</h3>
            <p>
            Munna Bhai, a gangster, decides to fulfil his father's dream by becoming a doctor. With a little help from his loyal sidekick Circuit, he enrols in a medical college and gets to work.
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

        {/* CARD_NUMBER 18*/}
        <Card id="ib71">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={IB71}
              alt="IB71"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            IB71</h3>
            <p>
            With limited time to defend the nation from the threat of Pakistan and China ahead of the Indo-Pakistani War of 1971, the Intelligence Bureau devises a sophisticated scheme to defy all odds.
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

        {/* CARD_NUMBER 19*/}
        <Card id="khufiya">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Khufiya}
              alt="Khufiya"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Khufiya</h3>
            <p>
            An operative of the Indian spy agency known as R&AW is assigned to track down a mole who is selling defense secrets while grappling with her dual identity as a spy and a lover.
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

        {/* CARD_NUMBER 20*/}
        <Card id="selfiee">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Selfiee}
              alt="Selfiee"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Selfiee</h3>
            <p>
            An RTO inspector, Om Prakash, has the opportunity of a lifetime to meet his idol, Vijay Kumar. However, a misunderstanding between the two men results in a clash of egos.
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

        {/* CARD_NUMBER 21*/}
        <Card id="fukrey 3">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Fukrey3}
              alt="Fukrey 3"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Fukrey 3</h3>
            <p>
            The Fukras plan to take over Delhi and run for city elections. However, they have no money, so they take on an international job to make a quick buck, which changes their lives forever.
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

        {/* CARD_NUMBER 22*/}
        <Card id="dangal">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Dangal}
              alt="Dangal"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Dangal</h3>
            <p>
            Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.

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

        {/* CARD_NUMBER 23*/}
        <Card id="bajrangi bhaijaan">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Bajrangi_Bhaijaan}
              alt="Bajrangi Bhaijaan"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Bajrangi Bhaijaan</h3>
            <p>
            Pawan, a devotee of Lord Hanuman, finds a girl, who is speech impaired, lost in Haryana. He soon learns that she belongs to Pakistan and sets out to reunite her with her family at great personal cost.
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

        {/* CARD_NUMBER 24*/}
        <Card id="kabir singh">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Kabir_Singh}
              alt="Kabir_Singh"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Kabir Singh</h3>
            <p>
            Kabir, a genius yet hostile medical student, falls in love with Preeti from his college. When Preeti's father spots the couple kissing, he opposes their relationship and decides to marry her off.
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

        {/* CARD_NUMBER 25*/}
        <Card id="the kashmir files">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TKF}
              alt="TKF"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            the kashmir files</h3>
            <p>
            Krishna endeavours to uncover the reason behind his parents' brutal killings in Kashmir. He is shocked to uncover a web of lies and conspiracies in connection with the massive genocide.
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
    </>
  );
};

export default Bollywood;
