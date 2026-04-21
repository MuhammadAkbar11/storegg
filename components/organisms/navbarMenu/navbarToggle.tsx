import React from "react";
import { Navbar } from "react-bootstrap";

type Props = {};

function NavbarToggle({}: Props) {
  return (
    <Navbar.Toggle className="navbar-toggler" aria-controls="navbarNav">
      <span className="navbar-toggler-icon" />
    </Navbar.Toggle>
  );
}

export default NavbarToggle;
