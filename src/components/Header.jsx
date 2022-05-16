import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const Header = () => {
  // const [searchValue, setSearchValue ] = useState("");

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>Flash-Card-App</Navbar.Brand>
          </Link>
          {/* TODO: implament searchbar */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search a collection"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={e => {
                setSearchValue(e.target.value);
              }}
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
