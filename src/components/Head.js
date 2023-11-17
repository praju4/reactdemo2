import "./Header.css";
import {useState} from "react";
function Head() {
    const[counts,setCounts]=useState(0);
    function low()
    {
        setCounts(counts-1);
        
    }
    function high()
    {
        setCounts(counts+1);
    }
    return(
        <div>
            <button onClick={low}>👎</button>
           <button onClick={high}>💖</button>
            <span>{counts}</span>
        </div>
    )
  }
  export default Head;