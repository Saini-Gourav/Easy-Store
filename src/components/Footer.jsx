import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitterSquare,FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  return (
      <Container fluid style={{background:"#232123", color:"white"}} className=' p-4'>
        <Row>
          <Col md={4}>
            <h5>Easy-Store</h5>
           <p style={{color:'#5E5D5E'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo aliquam magnam? Numquam labore aliquid </p>
           <div className='gap-5'>
           <FaFacebookSquare size={40}/>
           <FaInstagramSquare size={40}/>
           <FaTwitterSquare size={40}/>
           <FaLinkedin size={40} />

           </div>
          </Col>
          <Col md={4}>
            <h5>Featured</h5>
            <ul className="list-unstyled" style={{color:"#5E5D5E"}}>
              <li>MEN</li>
              <li>WOMEN</li>
              <li>BOYS</li>
              <li>GIRLS</li>
              <li>CLOTHES</li>
              
            </ul>
            <p>Easy-Store © 2023. All Rights Reserved</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>ADDRESS</li>
              <li style={{color:"#5E5D5E"}}>Piplane C-Sector</li>
              <li>PHONE</li>
              <li style={{color:"#5E5D5E"}}>(+91) 9993635989</li>
              <li>EMAIL</li>
              <li style={{color:"#5E5D5E"}}>gouravsaini345@gmail.com</li>
            </ul>
          </Col>
         
        </Row>
      </Container>
  );
};

export default Footer;
