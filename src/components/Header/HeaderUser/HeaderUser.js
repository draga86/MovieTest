import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import "./HeaderUser.css";
import { useSelector } from "react-redux";

const HeaderUser = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  const currnetUser = "korisnik"; 


  const userOrAdmin = () => {
    if (currnetUser === "korisnik") {
      return (
        <>
          <NavDropdown.Item as={Button}>
            <NavLink className="header_links header_profile" to="/home">
              
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item as={Button}>
           
          </NavDropdown.Item>
        </>
      );
    } else if (currnetUser === "admin") {
      return <NavDropdown.Item as={Button}>Admin Panel</NavDropdown.Item>;
    }
  };

  if (user.user_id) {
    return (
      <NavDropdown title="Ime profila" id="basic-nav-dropdown">
        {userOrAdmin()}
        <NavDropdown.Divider />
        <NavDropdown.Item as={Button} onClick={() => console.log("odjavio sam se")}>
          Odjava
        </NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    return (
      <>
        <NavLink to='/login'><Button
          className="header_profile"
          onClick={() => console.log("")}
          variant="primary"
        >
          Login
        </Button></NavLink>
        <NavLink to='/register'><Button className="header_profile" variant="secondary">
          Register
        </Button></NavLink>
        
        
      </>
    );
  }
};

export default HeaderUser;
