import React from "react";
import { Card, Button } from "antd";
import Search from '../Search';

import Scam from '../../images/scam.jpg';
import FamilyMan from '../../images/FamilyMan.jpg';
import SacredGames from '../../images/SacredGames.jpg';
import Aranyak from '../../images/aranyak.jpg';
import bob from '../../images/bard of blood.jpg';
import betaal from '../../images/betaal.jpg';
import breath from '../../images/breathe.jpg';
import Choona from '../../images/choona.jpg';
import Cj from '../../images/Criminal Justice.jpg';
import delhiC from '../../images/delhi crime.jpg';
import farzi from '../../images/farzi.jpg';
import khakee from '../../images/khakee.jpg';
import kotaf from '../../images/kota-factory.jpg';
import mirza from '../../images/mirzapur.jpg';
import pancha from '../../images/panchayat.jpeg';
import rana from '../../images/rana.jpg';
import scoop from '../../images/scoop.jpg';
import fameg from '../../images/the fame game.jpg';
import typewriter from '../../images/typewriter.jpg';
import YehKali from '../../images/yeh-kaali-kaali-ankhein.jpg';
import asp from '../../images/aspirants.jpg';
import gullak from '../../images/gullak.avif';
import patal from '../../images/paatal lok.jpg';
import inedge from '../../images/inside-edge.jpg';


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
                {/* CARD 4 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={Aranyak}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Aranyak</h3>
                    <p>
                    Political ploys, personal agendas and a beastly myth all surface as two mismatched hill station cops navigate a web of suspects after a puzzling murder.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya Gaikwad</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 5 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={bob}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Bard of Blood</h3>
                    <p>
                    Ex communicated RAW agent Kabir Anand, a courageous analyst and a sleeper agent take on a covert mission in Balochistan when four Indian spies are captured; the mission soon turns south and Kabir must face his demons from the past.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya </Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 6 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={betaal}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Betaal</h3>
                    <p>
                    A remote village becomes the arena of a breathless battle when an undead East India Company officer and his battalion of zombie redcoats attack a squad of modern-day soldiers.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 7 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={breath}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Breathe</h3>
                    <p>
                    This series just asks one question - how far will you go to protect the one you love. Two desperate and driven men must engage in the ultimate cat and mouse game to save the one they love.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 8 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={Choona}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Choona</h3>
                    <p>
                    When an unlikely group of misfits discovers a common enemy in the same ruthless yet superstitious politician, they plot a heist to exact revenge.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 9 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={Cj}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Criminal Justice</h3>
                    <p>
                    Sex, drugs and a gruesome murder. An edgy one night stand turns into a nightmare for Aditya, when he wakes up with blood on his hands. The evidence is stacked against him, but he doesn't remember the grisly crime. Is he guilty or not ?
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 10 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={delhiC}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Delhi Crime</h3>
                    <p>
                    Based on the Nirbhaya case, Delhi Crime follows the Delhi Police investigation into the finding of the men who perpetrated this crime.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 11 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={farzi}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Farzi</h3>
                    <p>
                    An artist who gets pulled into the murky high stakes of a con job and a fiery task force officer on the mission to rid the country of his menaces in a fast-paced, edgy one-of-a-kind thriller.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 12 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={gullak}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
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
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 13 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={khakee}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Khakee: The Bihar Chapter</h3>
                    <p>
                    As a righteous cop pursues a merciless criminal in Bihar, he finds himself navigating a deadly chase and a moral battle mired in corruption.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 14 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={kotaf}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Kota Factory</h3>
                    <p>
                    Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-day lives.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 15 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={mirza}
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
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 16 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={pancha}
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
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 17 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={rana}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Rana Naidu</h3>
                    <p>
                    In the complicated world of celebrities, Rana Naidu is the go-to problem-solver. When his father is released from prison, Rana grapples with family secrets and personal conflict and realizes that the only problem he can't fix is his own.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 18 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={scoop}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Scoop</h3>
                    <p>
                    A journalist's life takes a 360 because of the very system that made her who she is. Will she fight or will she concede?
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 19 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={fameg}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>The Fame Game</h3>
                    <p>
                    When India's most famous actress goes missing, the search for her chips away at the flawless facade of her life and family, revealing painful truths.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 20 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={typewriter}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Typewriter</h3>
                    <p>
                    Three young friends in Goa plan to search an old villa for ghosts, but when a new family moves in, the home's buried past resurfaces in chilling ways.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 21 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={YehKali}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Yeh Kaali Kaali Ankhein</h3>
                    <p>
                    Aggressively pursued by a politician's daughter who will do anything to marry him, a small-town man takes drastic measures to reclaim his life.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 22 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={asp}
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
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 21 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={patal}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Pataal Lok</h3>
                    <p>
                    A down-and-out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit leads him to 'Paatal Lok' and to shocking discoveries in the four suspects' pasts.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

        {/* CARD 22 */}
        <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <img
                        src={inedge}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "150px" }}
                    />
                </div>
                <div style={{ flex: 6 }}>
                    <h3>Inside Edge</h3>
                    <p>
                    Inside Edge is the story of the Mumbai Mavericks, a T20 cricket franchise playing in the Powerplay League. Set in a landscape of conflicting interests, where selfishness is almost a virtue, where sex, money, and power are mere means to an end, Inside Edge is a story that pulls no punches, minces no words, and takes no prisoners. Come witness the game behind the game.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href='https://github.com/aaadityag'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="btn btn-outline-dark gitbtn">Contributed by Aditya</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>

    </>
  )
};

export default BollywoodWeb;
