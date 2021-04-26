import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import theImg from "./lognav.svg";

import "react-bootstrap";

function Nass() {
  return (
    <div>
      <Navbar variant="light" className="mt-1 ">
        <Navbar.Brand href="#home">
          <img src={theImg} alt="logos" className="logimg" />
        </Navbar.Brand>
        <Nav className="mx-auto bot ">
          <Nav.Link href="#home" className="fles">
            About us
          </Nav.Link>
          <Nav.Link href="#features">Career</Nav.Link>
          <Nav.Link href="#pricing">Departments</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Nass;
