import React, { useState} from "react";

import DropDown from "./DropDown";
import "./TopNav.css";



const TopNav = () => {
  const [show, setShow] = useState(false);
 
  
 
  return (
    <div>
      <div className="topnav">
        <div className="topnav__color">
          <div className="topnav__content">
            
         <button onClick={()=> setShow(!show)} className="topnav__content--btn"><i class="bi bi-person-circle"></i></button>

        <DropDown show={show}/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
