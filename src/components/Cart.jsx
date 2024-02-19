import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../features/cartSlice";

import ModalT from "./ModalT";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  ///////////////Grand Total///////////////////
  const Total = useSelector((state) => state.cart.cartData);
  console.log("Total", Total);
  const sum = Total.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  /////////////////////////////////

  const dataC = useSelector((state) => state.cart);
  // console.log("Cart Data...",dataC)
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <>
      {/* <Container className="mt-5 mb-4">
        <Row>
        {dataC.cartData.map((item, index) => (
          <Col key={index} xs={12} md={4}>
            <Card style={{ width: "200px", height: "500px" }}>
              <Card.Img variant="top" src={`http://localhost:5000/${item?.image}`} />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.description}</Card.Text>
                <Button onClick={()=> handleRemove(item._id)} variant="danger">Remove1</Button>

                
                <Button onClick={() => handleDecreaseQuantity(item._id)} variant="primary">-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => handleIncreaseQuantity(item._id)} variant="primary">+</Button>
              
              <span>{item.amount}</span><br />
              <ModalT/>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
    </Container> */}
      <Container className="mt-5 mb-5">
        <Row>
          <Col
            md={8}
            style={{overflow:"scroll", height:"60vh",overflowY:""}}
            className="hidescroll"
          >
            {dataC.cartData.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around"
                style={{
                  background: "#ECE8EA",
                  padding: "10px",
                  marginBottom: "20px",
                  // overflow: "scroll",
                  // height: "50vh",
                }}
              >
                <div className="d-flex">
                  <img
                    src={`http://localhost:5000/${item?.image}`}
                    alt=""
                    height={200}
                    width={150}
                    style={{ borderRadius: "5px" }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <p style={{ margin: "10px 0", fontWeight: "bold" }}>
                      {item.title}
                    </p>
                    <p style={{ margin: "5px 0" }}>{item.category}</p>
                    <p style={{ margin: "5px 0" }}>
                      <LiaRupeeSignSolid style={{ marginBottom: "3px" }} />
                      {item.price}
                    </p>
                    <Button
                      onClick={() => handleRemove(item._id)}
                      variant="danger"
                      style={{ marginTop: "60px" }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      border: "1px solid black",

                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      onClick={() => handleDecreaseQuantity(item._id)}
                      style={{
                        cursor: "pointer",
                        borderRight: "1px solid black",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                      }}
                    >
                      <FaMinus />
                    </div>
                    <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                      {item.quantity}
                    </div>
                    <div
                      onClick={() => handleIncreaseQuantity(item._id)}
                      style={{
                        cursor: "pointer",
                        borderLeft: "1px solid black",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                      }}
                    >
                      <FaPlus />
                    </div>
                  </div>

                  <div style={{ float: "inline-end", marginTop: "150px" }}>
                    <span>Total : </span>
                    <span>{item.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </Col>

          <Col md={4}>
            <div
              style={{
                background: "#ECE8EA",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <h2>Grand Total</h2>
              <p>Total: {sum.toFixed(2)}</p>
              <ModalT />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
