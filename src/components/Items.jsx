// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// // import image1 from '../images/photo4.jpg';
// import Item2 from "../images/Item2.png";
// import Item1 from "../images/Item1.png";
// import Parallax from "./Parallax";
// const Items = () => {
//   return (
//     <>
//     <Container>
//       <Row>
//         <Col md={12}>
//           <center>
//             <span
//               className="sub-heading"
//               style={{ borderBottom: "2px solid #FF7851" }}
//             >
//               Our Featured
//             </span>
//             <p className="text">
//               Here you can check out our new products with fair price on
//               Easy-Store
//             </p>
//           </center>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={3}>
//           <div style={{ background: "#ECE8EA" }}>
//             <center>
//               <img src={Item2} alt="" height={300} width={250} />
//             </center>
//             <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
//             <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <Button
//               variant="dark"
//               style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div style={{ background: "#ECE8EA" }}>
//             <center>
//               <img src={Item1} alt="" height={300} width={250} />
//             </center>
//             <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
//             <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <Button
//               variant="dark"
//               style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div style={{ background: "#ECE8EA" }}>
//             <center>
//               <img src={Item2} alt="" height={300} width={250} />
//             </center>
//             <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
//             <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <Button
//               variant="dark"
//               style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </Col>
//         <Col md={3}>
//           <div style={{ background: "#ECE8EA" }}>
//             <center>
//               <img src={Item1} alt="" height={300} width={250} />
//             </center>
//             <p className="sub-heading"style={{marginLeft:"10px"}}>Title</p>
//             <p className="text" style={{marginLeft:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <Button
//               variant="dark"
//               style={{ backgroundColor: "", color: "white", marginLeft:"10px", marginBottom:"10px" }}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </Col>
//       </Row>
      
//     </Container>
//     <Parallax />
//     </>
//   );
// };

// export default Items;

///////////////////Uper side original/////////////////

import React from "react";
import { Container, Row, Col, Button,Card } from "react-bootstrap";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getAllData} from '../features/gitUserSlice';
import { add } from "../features/cartSlice";
import Spinner from 'react-bootstrap/Spinner';
import { LiaRupeeSignSolid } from "react-icons/lia";

const Items = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.app)
  console.log(data.users.data,'hey')

  useEffect(() => {
    dispatch(getAllData());
  },[dispatch])

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
      {/* {data?.users?.data?.map((item, index) => (
          <Col key={index} xs={12} md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`http://localhost:5000/${item?.image}`} height={200} width={100}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ height: "6rem", overflow: "hidden", textOverflow: "ellipsis" }}>{item.category}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <Button onClick={() => handleAdd(item)} variant="primary" block>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))} */}
       {data?.users?.data?.map((item, index) => (
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
  );
};

export default Items;

