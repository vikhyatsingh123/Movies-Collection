import React,{useState} from 'react'
import './Navbar.css'
import heart from './heart.png'
import heartw from './heart-white.png'
import help from './help.png'
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import '../styles/styles.css';
// import user from "../images/8.account.png";
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
const Navbar = (props) => {
    const[keyword,setKeyword]=useState("");
    const [checked, setChecked] = useState(false);

 
  
  return (
    <div>
      <div className='nav-flexbox'>
        <Link to="/"><p className='nav-logo'>Movies Collection</p></Link>
        <div className='nav-mid'>
        <NavLink to='/'>{checked?<p className='nav-mid-cont' style={{'color':'white'}} >Home</p>:<p className='nav-mid-cont' >Home</p>}</NavLink>
        <NavLink to='/about'>{checked?<p className='nav-mid-cont' style={{'color':'white'}} >About</p>:<p className='nav-mid-cont' >About</p>}</NavLink>
        <NavLink to='/suggest'>{checked?<p className='nav-mid-cont' style={{'color':'white'}} >Suggest</p>:<p className='nav-mid-cont' >Suggest</p>}</NavLink>
       
        </div>
        
        <div className='nav-right'>
        

                  <div>
                  <Link to="#" >
                  {checked?<p className='nav-mid-cont' style={{'color':'white'}} >SignIn</p>:<p className='nav-mid-cont' >SignIn</p>}
                  </Link>
                </div>
           
            
           <Link to="/list">{checked?<p className='nav-mid-cont'><img src={heartw}  width={30}/></p>:<p className='nav-mid-cont'><img src={heart}  width={30}/></p>}</Link> 
           <Button className='nav-mid-cont' checked={checked} transition={300}>
     <input
       type="checkbox"
        checked={checked}
       onChange={() => setChecked(!checked)}
        onClick={props.togglemode}
     />
     <span />
   </Button>
           
            {/* <p className='nav-mid-cont'><img src={help} width={30}/></p> */}
            
        </div>
        

      </div>
    </div>
  )
}

export default Navbar
