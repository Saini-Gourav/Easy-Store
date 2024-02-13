import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ModalT() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [allFormData, setAllFormData] = useState([])

  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // localStorage.setItem('formData', JSON.stringify(formData));

    const newFormDataList = [...allFormData, formData];
    // localStorage.setItem('allFormData', JSON.stringify(newFormDataList))
    setAllFormData(newFormDataList)

    handleClose();
  };

  // useEffect(() => {
  //   localStorage.setItem('allFormData', JSON.stringify(newFormDataList))
  // })
  useEffect(() => {
    localStorage.setItem('allFormData', JSON.stringify(allFormData));
  }, [allFormData]); 

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Order Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formZip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your ZIP code"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalT;
