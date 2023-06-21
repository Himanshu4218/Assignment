import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Employee</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to='/teams' >
              <Nav.Link>
                 Teams
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <SearchBox />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
