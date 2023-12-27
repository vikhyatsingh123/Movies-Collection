import { color } from "framer-motion";
import React from "react";

const Search = () => {
  let val;
return(
   <>
        <div>
            <input type="text" placeholder=" Search Here" onChange={(evt) => { val='#'+evt.target.value; }} style={{background:"ButtonHighlight",height:"35px"}}></input>
            
                <button className="btn btn-outline-dark" onClick={(e)=>{window.location.href=`${val}`;console.log(val);}}>Search</button>
              
        </div>
        </>
        
);
};

export default Search;