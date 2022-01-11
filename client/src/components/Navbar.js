import React from "react";
import {Navbar, NavbarBrand } from "reactstrap";

import icon from "../icon.png"

export default props => {
  return (
      <div>
      <Navbar className="nav-head">
        <NavbarBrand
          className="nav-brand" style={{color:"#E34234"}}
          onClick={_ => {
            props.setPage(0);
          }}
        >
         <img src={icon} alt="icon" style={{height:"2em",width:"2em",marginRight:"10px",marginTop:"-12px"}}/>
         <span style={{fontSize:"2.1rem"}}>BookMyTable</span>
        </NavbarBrand>
      </Navbar>
      </div>
  );
};