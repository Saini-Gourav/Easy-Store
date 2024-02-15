import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import { Container, Row, Col, Button } from "react-bootstrap";
import { add } from "../features/cartSlice";
import { LiaRupeeSignSolid } from "react-icons/lia";

const CategoryData = () => {
  const dispatch = useDispatch();
    const data = useSelector((state) => state.filter)
    console.log(data?.data?.getData,"filterWala")

    const handleAdd = (product) => {
      dispatch(add(product))
  }

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
     
       {data?.data?.getData?.map((item, index) => (
  <Col key={index} md={3}>
    <div style={{ background: "#ECE8EA", padding: "10px", marginBottom: "20px" }}>
      <center>
        <img src={`http://localhost:5000/${item?.image}`} alt="" height={300} width={250} style={{ borderRadius: "5px" }} />
      </center>
      <p style={{ margin: "10px 0", fontWeight: "bold" }}>{item.title}</p>
      <p style={{ margin: "5px 0" }}>{item.category}</p>
      <p style={{ margin: "5px 0" }}><LiaRupeeSignSolid style={{marginBottom:"3px"}}/>{item.price}</p>
      <center>
        <Button onClick={() => handleAdd(item)} variant="dark" style={{ marginTop: "10px" }}>Add to Cart</Button>
      </center>
    </div>
  </Col>
))}

      </Row>
      
    </Container>
    </>
  )
}

export default CategoryData
