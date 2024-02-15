import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getFilterData } from "../features/filterSlice";

const NavbarT = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart)

  const handleFilter = (category) => {
    dispatch(getFilterData(category))
    navigate("/category");
}

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
                <NavDropdown.Item onClick={() => handleFilter("mens")}>MENS</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleFilter("women")}>WOMENS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleFilter("kids")}>KIDS</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link to='/cart'>Cart</Nav.Link> */}
              <Nav.Link as={Link} to="/cart">Cart-<span>{items.cartData.length}</span></Nav.Link>
              <ButtonGroup>
                <span><Nav.Link as={Link} to="/login">Login</Nav.Link></span>
                <span><Nav.Link as={Link} to="/register">Sign Up</Nav.Link></span>
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarT;
