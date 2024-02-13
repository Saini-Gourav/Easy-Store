import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarT = () => {
    const items = useSelector((state) => state.cart)
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary" fixed="">
        <Container>
          <Navbar.Brand href="#home">Easy-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/homebanner">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="Categories">
                <NavDropdown.Item href="#">Shirt</NavDropdown.Item>
                <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Jacket</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link to='/cart'>Cart</Nav.Link> */}
              <Nav.Link as={Link} to="/cart">Cart-<span>{items.cartData.length}</span></Nav.Link>
              <ButtonGroup>
                <Button variant="success"><Nav.Link as={Link} to="/login">Login</Nav.Link></Button>
                <Button variant="primary"><Nav.Link as={Link} to="/register">Sign Up</Nav.Link></Button>
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarT;
