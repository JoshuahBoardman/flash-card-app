import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Flash-Card-App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
