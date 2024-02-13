import React, { useState } from 'react';
import { Container,Form, Button, Row, Col } from 'react-bootstrap';


const OrderForm = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("successfully submitted")
  };

  return (
    <>
    <Container className='mt-5'>
        <Row>
            <Col>
            <div style={{height:'500px', width:'600px',marginLeft:'200px'}}>
            <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>ZIP Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your ZIP code"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
        <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default OrderForm;
