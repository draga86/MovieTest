import React from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import HeaderUser from "./HeaderUser/HeaderUser";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
  
    <Navbar bg="transparent" expand="lg">
      <Container className="Container">
         <Navbar.Brand className="">MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col justify-content-around align-items-center">
            <Form className="d-flex header_form">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <NavLink className="header_links" to="/home">
              Home
            </NavLink>
            <NavLink className="header_links" to="/About">
              About
            </NavLink>
            <NavLink className="header_links" to="/Contact">
              Contact
            </NavLink>
            <HeaderUser />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  
  );
};

export default Header;
