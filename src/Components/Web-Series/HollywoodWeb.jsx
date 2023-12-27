import React from "react";
import { Card, Button } from "antd";
import Search from '../Search';

import Suits from '../../images/Suits.jpg'
import Got from '../../images/Got.jpg';
import Witcher from '../../images/Witcher.jpg'
import MoneyHiest from '../../images/moneyH.jpg'
import PeakyBlinders from '../../images/PeakyBlinders.png'
import breakingbad from '../../images/breakingbad.png'
import TheWalkingDead from '../../images/TheWalkingDead.png'
import StrangerThings from '../../images/StrangerThings.png'
import TheBoys from '../../images/TheBoys.png'
import Friends from '../../images/Friends.png'
import Dexter from '../../images/Dexter.png'
import BlackMirror from '../../images/BlackMirror.png'
import HouseofCards from '../../images/HouseofCards.png'
import TheSopranos from '../../images/TheSopranos.png'
import Barry from '../../images/Barry.png'
import Daredevil from '../../images/Daredevil.png'
import PrisonBreak from '../../images/PrisonBreak.png'
import TrueDetective from '../../images/TrueDetective.png'
import CobraKai from '../../images/CobraKai.png'
import Dark from '../../images/Dark.png'
import NHIE from '../../images/NHIE.png'
import TheMandalorian from '../../images/TheMandalorian.png'
import HOTD from '../../images/HOTD.png'
import Monarch from '../../images/Monarch.png'
import PercyJackson from '../../images/PercyJackson.png'
import TLK from '../../images/TLK.png'
import Locke from '../../images/locke.jpg'
import Stranger from '../../images/Stranger.jpg'
const HollywoodWeb = () => {
  return (
    <>
    <Search/>
      {/* Card 1 */}
      <Card id="game of thrones">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Got}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Game Of Thrones</h3>
            <p>
              Nine noble families fight for control over the lands of Westeros,
              while an ancient enemy returns after being dormant for a
              millennia.
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
      <Card id="the witcher">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={Witcher}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>The Witcher</h3>
            <p>
              Geralt of Rivia, a solitary monster hunter, struggles to find his place
              in a world where people often prove more wicked than beasts.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/PrinceSingh12398'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="btn btn-outline-dark gitbtn">Contributed by Prince Singh</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 3 */}
      <Card id="money heist">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={MoneyHiest}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Money Heist</h3>
            <p>
              The group takes 67 hostages, including the daughter of the British Ambassador.
              They lock themselves in the Royal Mint for over a week. Their goal is to print
              €2.4 billion in unmarked bills without bloodshed.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href="https://github.com/sami3160"
              target="_blank"
              rel="noopener noreferrer">
                <Button type="btn btn-outline-dark gitbtn">Contributed by Sami Bhadgaonkar</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* CARD_NUMBER 4 */}
      <Card id="suits">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Suits}
              alt="SUITS"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Suits</h3>
            <p>
              "Suits" follows brilliant college dropout Mike Ross,
              hired by top lawyer Harvey Specter, despite lacking a
              law degree. The duo navigates legal challenges at
              Pearson Specter, combining wit and deception.
              The series explores complex relationships and high-stakes
              legal drama in a fast-paced corporate world.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href='https://github.com/aindree-2005'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="btn btn-outline-dark gitbtn">Contributed by Aindree Chatterjee</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Card 5 */}
      <Card id="peaky blinders">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={PeakyBlinders}
              alt="PeakyBlinders"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Peaky Blinders</h3>
            <p>
              Peaky Blinders is a British period crime drama television series created by Steven Knight.
              Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct
              aftermath of the First World War. The fictional gang is loosely based on a real urban youth
              gang of the same name who were active in the city from the 1880s to the 1910s.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="btn btn-outline-dark gitbtn">Contributed by Surajit Maity</Button>
            </div>
          </div>
        </div>
      </Card>


       {/* CARD_NUMBER 6*/}
       <Card id="breaking bad">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={breakingbad}
              alt="breaking bad"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Breaking Bad</h3>
            <p>
            Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.
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
             <Card id="the walking dead">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TheWalkingDead}
              alt="TheWalkingDead"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            The Walking Dead</h3>
            <p>
            In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices.
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
             <Card id="stranger things">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={StrangerThings}
              alt="StrangerThings"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Stranger Things</h3>
            <p>
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
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
             <Card id="the boys">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TheBoys}
              alt="TheBoys"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            The Boys</h3>
            <p>
            Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers? When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name.
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
             <Card id="friends">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Friends}
              alt="Friends"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Friends</h3>
            <p>
            Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.
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
             <Card id="dexter">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Dexter}
              alt="Dexter"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Dexter</h3>
            <p>
            Dexter Morgan, a man with homicidal tendencies, lives a double life. He works as a forensic technician for the police department during the day and kills heinous perpetrators in his free time.
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
             <Card id="black mirror">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={BlackMirror}
              alt="BlackMirror"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Black Mirror</h3>
            <p>
            In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours.
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
             <Card id="house of cards">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={HouseofCards}
              alt="HouseofCards"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            House of Cards</h3>
            <p>
            Frank Underwood is a Democrat appointed as the Secretary of State. Along with his wife, he sets out on a quest to seek revenge from the people who betrayed him while successfully rising to supremacy.
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
             <Card id="the sopranos">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TheSopranos}
              alt="TheSopranos"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            The Sopranos</h3>
            <p>
            Tony Soprano, an Italian-American mafia head based in New Jersey, struggles to manage his family and criminal life and confides his affairs to his psychiatrist Jennifer Melfi.
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
             <Card id="barry">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Barry}
              alt="Barry"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Barry</h3>
            <p>
            Barry, who kills to earn a living, discovers the joy of acting while he is looking for his target. Surprisingly, he loves it so much that he is ready to leave his old life behind.
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
             <Card id="daredevil">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Daredevil}
              alt="Daredevil"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Daredevil</h3>
            <p>
            Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.
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
             <Card id="prison break">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={PrisonBreak}
              alt="PrisonBreak"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Prison Break</h3>
            <p>
            Michael Scofield finds himself in the Ogygia Prison in Sana'a, Yemen, seven years after his apparent death. His friends, brother and fellow escapee do everything it takes to bring him home.
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
             <Card id="true detective">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TrueDetective}
              alt="TrueDetective"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            True Detective</h3>
            <p>
            Police officers and detectives around the USA are forced to face dark secrets about themselves and the people around them while investigating homicides.
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
             <Card id="cobra kai">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={CobraKai}
              alt="CobraKai"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Cobra Kai</h3>
            <p>
            Thirty four years after events of the 1984 All Valley Karate Tournament, a down-and-out Johnny Lawrence seeks redemption by reopening the infamous Cobra Kai dojo, reigniting his rivalry with a now successful Daniel LaRusso.
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
             <Card id="dark">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Dark}
              alt="Dark"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Dark</h3>
            <p>
            When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. "Dark" represents the first German original series produced for Netflix.
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
             <Card id="never have i ever">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={NHIE}
              alt="NHIE"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Never Have I Ever</h3>
            <p>
            After a traumatic year, a first-generation Indian-American teenager wants to improve her status at school, but friends, family, and feelings don't make it easy on her.
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
             <Card id="themandalorian">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TheMandalorian}
              alt="TheMandalorian"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            The Mandalorian</h3>
            <p>
            After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.
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
             <Card id="house of the dragon">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={HOTD}
              alt="HOTD"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            House of the Dragon</h3>
            <p>
            After the death of their father, two siblings fight for the throne, thereby causing a civil war known as the Dance of the Dragons.
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
             <Card id="monarch">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Monarch}
              alt="Monarch"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Monarch: Legacy of Monsters</h3>
            <p>
            After the world-shattering revelation that monsters are real, two siblings follow in their father's footsteps to uncover their family's connection to the secretive organization known as Monarch.
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
             <Card id="percy jackson">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={PercyJackson}
              alt="PercyJackson"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            Percy Jackson and the Olympians</h3>
            <p>
            12-year-old modern demigod, Percy Jackson, is coming to terms with his newfound divine powers when the sky god, Zeus, accuses him of stealing his master lightning bolt; with his friend's help, Percy must restore order to Olympus.
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

             {/* CARD_NUMBER 26*/}
             <Card id="the last kingdom">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={TLK}
              alt="TLK"
              style={{ height: "150px", width: "100px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>
            The Last Kingdom</h3>
            <p>
            Uhtred, the son of a nobleman, is captured and raised by Danes. Once he grows up, he has to choose whom he will protect, the land where he grew up or the people who raised him as their own.
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
  {/* Card 27 */}
      <Card id="stranger">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Stranger}
              alt="SUITS"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Stranger Things</h3>
            <p>
              In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
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
                <Button type="btn btn-outline-dark gitbtn">Contributed by Yash Sachan</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      {/* Card 28 */}
      <Card id="locke & key">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Locke}
              alt="SUITS"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Locke & Key</h3>
            <p>
            Following their father's murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez.
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
                <Button type="btn btn-outline-dark gitbtn">Contributed by Yash Sachan</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default HollywoodWeb;
