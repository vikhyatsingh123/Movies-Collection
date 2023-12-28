import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (

    <>

<footer>
    <div class="imgcntr">
    <Link to="/"><p className='nav-logo'>Movies Collection</p></Link>
    </div>
    <div class="maincnt">
        <h2>MAIN CONTACTS</h2>
        <ul>
            <li>
                Owner
            </li>
            <li>
                <b>+91 8383843XXX</b>
            </li>
            <li>
                Support
            </li>
            <li>
                <b>+91 7837022XXX</b>
            </li>


        </ul>

    </div>

    <div class="sprtcnt">
        <h2>Made with ❤️ by Vikhyat Singh</h2>  
        <b>Copyright Reserved @MoviesCollection.com ©️</b>

    </div>

    <div class="icon_container">
        <div class="icon">
            <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <div class="icon">
            <i class="fa-brands fa-twitter"></i>
        </div>
    </div>

</footer>
    
    </>
  )
}

export default Footer