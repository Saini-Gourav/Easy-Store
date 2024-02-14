import { useDispatch, useSelector } from "react-redux"
import { getAllData } from "../features/gitUserSlice";
import { useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { add } from "../features/cartSlice";
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.app)
    console.log(data.users.data,"FakeData")

    useEffect(() => {
        dispatch(getAllData());
        localStorage.setItem("login",true)
    },[dispatch]);

    if(data.loading){
        // return <h2>Loading.....</h2>
        return <Spinner animation="border" variant="primary" />

    }
    if(data.error != null){
        return <h3>{data.error}</h3>
    }

    const handleAdd = (product) => {
        dispatch(add(product))
    }

  return (
    <>
   

<Container className="mt-4 mb-4">
      <Row>
        {data?.users?.data?.map((item, index) => (
          <Col key={index} xs={12} md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`http://localhost:5000/${item?.image}`} height={200} width={100}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text style={{ height: "6rem", overflow: "hidden", textOverflow: "ellipsis" }}>{item.description}</Card.Text> */}
                <Card.Text>${item.price}</Card.Text>
                <Button onClick={() => handleAdd(item)} variant="primary" block>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default Home;
