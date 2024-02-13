import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Container style={{height:"400px", background:"black", marginBottom:"5px"}}>
        <Row>
            <Col>
            <div style={{color:"white"}}>
                <h1>Easy-Store</h1>
            </div>
            </Col>
            <Col>hiii
            </Col>
            <Col>hiii</Col>
        </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer;
