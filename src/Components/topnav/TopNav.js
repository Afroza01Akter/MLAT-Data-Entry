import React, { useState} from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
import "./TopNav.css";



const TopNav = () => {
  const [show, setShow] = useState(false);
 
  
 
  return (
    <div>
      <div className="topnav">
        <div className="topnav__color">
          <div className="topnav__content">
            
         <Button onClick={()=> setShow(!show)} className="topnav__content--btn"><i class="bi bi-person-circle"></i></Button>

        <Modal show={show}/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
