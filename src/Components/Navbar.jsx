// import React, { useState } from "react";
// import { Menu, Switch } from "antd";
// import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import '../styles/styles.css';
import React, { useState } from "react";
import { FaHome, FaInfoCircle,FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background: ${props => (props.checked ? "white" : "#1B1D29")};
  cursor: pointer;
  transition: all ${props => `${props.transition}ms`} ease;

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 999;
  }

  span {
    position: absolute;
    top: 2px;
    left: ${props => (props.checked ? "18px" : "2px")};
    background: ${props => (props.checked ? "#1B1D29" : "white")};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all ${props => `${props.transition}ms`} ease;
  }
`;
export default function Navbar(props) {

  const [checked, setChecked] = useState(false);
  return (


    <div >
    <div className="nav  px-4  bord " style={{ transition: `all 300ms ease` }}>
        <div className="webtitle bord col-3"><h4 className="bord">Movies Collection</h4></div>
        <div className="navtabs bord col-8">
          <ul className="navbar bord" style={{ display: 'flex'  }}>
            <Link to="/">
              <li style={{ marginRight: '15px',display:"flex",alignItems: "center" }}>
                <FaHome /><div className="navtitles">Home</div>
              </li>
            </Link>
            <Link to="/about"  >
              <li style={{ marginRight: '15px', display:"flex" , alignItems: "center"}}>
                <FaInfoCircle /><div className="navtitles"> About</div>
              </li>
            </Link>
            <Link to="/suggest"> 
            <li style={{display:"flex" , alignItems: "center"}}>
                <FaLightbulb /><div className="navtitles"> Suggest</div>
              </li>
            </Link>
          </ul>
        </div>

    <div className="modebtn form-check form-switch form-check-reverse  bord col-1">
    
       <Button checked={checked} transition={300}>
        <input
          type="checkbox"
           checked={checked}
          onChange={() => setChecked(!checked)}
           onClick={props.togglemode}
        />
        <span />
      </Button>
     {/* <label >
      {props.mode === "light" ? "Dark" : "Light"} 
     </label>  */}
    </div> 
 </div>
</div>
  );
};


