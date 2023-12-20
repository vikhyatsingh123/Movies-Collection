import React ,{ useState , useEffect} from "react";
import Home from './Components/Home';
import About from './Components/About';
import Suggestion from './Components/Suggestion';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,

  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");
  const togglemode =() =>{
    if (mode === "light"){
      setmode("dark");
    }
    else{
      setmode("light");
    }
  }

  useEffect(() => {
    // Update the class on the body element when mode changes
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);

  return(

     <Router>
      <Navbar togglemode={togglemode} mode={mode}/>
      <Routes>
        
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/suggest" element={<Suggestion />}> </Route>
      </Routes>
  </Router>

  )
}

export default App;