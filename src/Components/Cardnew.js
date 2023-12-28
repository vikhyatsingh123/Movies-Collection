import React from "react";
import { Card, Button } from "antd";


const Cardnew = ({img,title,description,contributor,link}) => {
  return (
    <>
      {/* Card 1 */}
      <Card>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img
              src={img}
              alt="Image"
              style={{ maxWidth: "100%", height: "150px" }}
            />
          </div>
          <div style={{ flex: 6 }}>
            <h3>{title}</h3>
            <p>
             {description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ><a href={link}
            target="_blank"
            rel="noopener noreferrer">
              <Button type="btn btn-outline-dark gitbtn">{contributor}</Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
      </>)}

      export default Cardnew;