import React from "react";
import { Card, Button } from "antd";
import deathnote from '../../images/deathnote.jpeg';
import dragonz from '../../images/dragonz.jpeg';
import aot from '../../images/aot.jpg';
import naruto from '../../images/naruto.jpg';
import onepiece from '../../images/onepiece.webp';

const BollywoodTV = () => {
  return (
    <div>
      
        <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={deathnote}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Death Note</h3>
            <p>
            An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.
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
              src={aot}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Attack on Titan</h3>
            <p>
            After his hometown is destroyed and is traumatized, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
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
              src={onepiece}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3> One Piece</h3>
            <p>
            Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece." 
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
              src={dragonz}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Dragon Ball Z</h3>
            <p>
            With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies. 
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
              src={naruto}
              alt="Image"
              style={{ maxWidth: "70%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>Naruto: Shippuden</h3>
            <p>
            Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.
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
    </div>
  )
}

export default BollywoodTV
