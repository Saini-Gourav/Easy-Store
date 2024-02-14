import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import image1 from '../images/photo4.jpg';
import Item2 from "../images/Item2.png";
import Item1 from "../images/Item1.png";
import Parallax from "./Parallax";
const Items = () => {
  return (
    <>
    <Container>
      <Row>
        <Col md={12}>
          <center>
            <span
              className="sub-heading"
              style={{ borderBottom: "2px solid #FF7851" }}
            >
              Our Featured
            </span>
            <p className="text">
              Here you can check out our new products with fair price on
              Easy-Store
            </p>
          </center>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div style={{ background: "#ECE8EA" }}>
            <center>
              <img src={Item2} alt="" height={300} width={250} />
            </center>
            <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
            <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button
              variant="dark"
              style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ background: "#ECE8EA" }}>
            <center>
              <img src={Item1} alt="" height={300} width={250} />
            </center>
            <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
            <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button
              variant="dark"
              style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ background: "#ECE8EA" }}>
            <center>
              <img src={Item2} alt="" height={300} width={250} />
            </center>
            <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
            <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button
              variant="dark"
              style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ background: "#ECE8EA" }}>
            <center>
              <img src={Item1} alt="" height={300} width={250} />
            </center>
            <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
            <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button
              variant="dark"
              style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
      
    </Container>
    <Parallax />
    </>
  );
};

export default Items;
