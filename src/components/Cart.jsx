import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { decreaseQuantity, increaseQuantity, remove } from '../features/cartSlice';
import Total from './Total';
import ModalT from './ModalT';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Cart = () => {
    const dataC = useSelector((state) => state.cart)
    console.log("Cart Data...",dataC)
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    const handleIncreaseQuantity = (productId) => {
      dispatch(increaseQuantity(productId));
    }
    const handleDecreaseQuantity = (productId) => {
      dispatch(decreaseQuantity(productId));
    }

  return (
    <>
      <Container className="mt-4 mb-4">
        <Row>
        {dataC.cartData.map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <Card style={{ width: "200px", height: "500px" }}>
              <Card.Img variant="top" src={`http://localhost:5000/${item?.image}`} />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.description}</Card.Text>
                <Button onClick={()=> handleRemove(item._id)} variant="danger">Remove</Button>

                
                <Button onClick={() => handleDecreaseQuantity(item._id)} variant="primary">-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => handleIncreaseQuantity(item._id)} variant="primary">+</Button>
              
              <span>{item.amount}</span><br />
              {/* <Button variant='danger'><Nav.Link as={Link} to="/order">Order Now</Nav.Link></Button> */}
              <ModalT/>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
    </Container>
    <Total/>
    </>
  )
}

export default Cart;



