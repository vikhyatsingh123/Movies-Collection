import React from "react";
import { Card, Button } from "antd";
import Suits from '../../images/Suits.jpg'
import Got from '../../images/Got.jpg';
import Witcher from '../../images/Witcher.jpg'
import MoneyHiest from '../../images/moneyH.jpg'
const HollywoodWeb = () => {
  return (
    <>
      {/* Card 1 */}
      <Card>
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
      <Card>
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
      <Card>
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
      <Card>
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
   

    </>
  );
};

export default HollywoodWeb;
