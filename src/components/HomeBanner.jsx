// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// // import photo1 from "../images/HomeBanner.jpg";
// import { IoStorefrontSharp } from "react-icons/io5";
// import CarouselHome from "./CarouselHome";
// import { FaInstagram, FaTwitter } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
// import { CiFacebook } from "react-icons/ci";

// import { Parallax } from "react-parallax";

// const HomeBanner = () => {
//   return (
//     <>
//       <Container fluid className="mt-4 mb-4">
//         <Container>
//           <Row>
//             <Col>
//               <div className="d-flex justify-content-around">
//                 <h1>Easy-Store</h1>
//                 <IoStorefrontSharp size={100} />
//               </div>
//               <div className="mt-5">
//                 <h1
//                   style={{
//                     fontSize: "80px",
//                     fontWeight: "bolder",
//                     textAlign: "left",
//                   }}
//                 >
//                   Buy From <br />
//                   Our Website
//                 </h1>
//                 <p
//                   className="mt-5"
//                   style={{ fontWeight: "500", fontSize: "16px" }}
//                 >
//                   Discover endless possibilities at EasyStore – your ultimate
//                   destination for seamless online shopping! Buy from our
//                   user-friendly website, where convenience meets quality.
//                   Explore a world of choices, unbeatable prices, and hassle-free
//                   transactions. Elevate your shopping experience with EasyStore
//                   - Your one-stop solution for all your needs
//                 </p>
//                 <h3 className="float-end">www.easystore.com</h3>
//               </div>
//               <center>
//                 <Button
//                   variant="success"
//                   style={{ width: "70%" }}
//                   className="mt-5"
//                 >
//                   Buy Now
//                 </Button>
//               </center>

//               <div
//                 className="d-flex justify-content-between mt-5"
//                 style={{
//                   background: "black",
//                   height: "5%",
//                   borderRadius: "20px",
//                   padding: "5px",
//                 }}
//               >
//                 <div style={{ color: "white" }}>Follow Us</div>
//                 <div
//                   className="d-flex gap-3 float-end"
//                   style={{ color: "white" }}
//                 >
//                   <FaInstagram size={30} />
//                   <FaWhatsapp size={30} />
//                   <CiFacebook size={30} />
//                   <FaTwitter size={30} />
//                 </div>
//               </div>
//             </Col>
//             <Col>
//               <div className="parallax">

//               </div>
//             </Col>
//           </Row>
//         </Container>
//         <CarouselHome />
//       </Container>
//     </>
//   );
// };

// export default HomeBanner;


import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoStorefrontSharp } from "react-icons/io5";
import CarouselHome from "./CarouselHome";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Parallax } from "react-parallax";

const HomeBanner = () => {
  return (
    <>
      <Container fluid className="mt-4 mb-4">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-around">
                <h1>Easy-Store</h1>
                <IoStorefrontSharp size={100} />
              </div>
              <div className="mt-5">
                <h1
                  style={{
                    fontSize: "80px",
                    fontWeight: "bolder",
                    textAlign: "left",
                  }}
                >
                  Buy From <br />
                  Our Website
                </h1>
                <p
                  className="mt-5"
                  style={{ fontWeight: "500", fontSize: "16px" }}
                >
                  Discover endless possibilities at EasyStore – your ultimate
                  destination for seamless online shopping! Buy from our
                  user-friendly website, where convenience meets quality.
                  Explore a world of choices, unbeatable prices, and hassle-free
                  transactions. Elevate your shopping experience with EasyStore
                  - Your one-stop solution for all your needs
                </p>
                <h3 className="float-end">www.easystore.com</h3>
              </div>
              <center>
                <Button
                  variant="success"
                  style={{ width: "70%" }}
                  className="mt-5"
                >
                  Buy Now
                </Button>
              </center>

              <div
                className="d-flex justify-content-between mt-5"
                style={{
                  background: "black",
                  height: "5%",
                  borderRadius: "20px",
                  padding: "5px",
                }}
              >
                <div style={{ color: "white" }}>Follow Us</div>
                <div
                  className="d-flex gap-3 float-end"
                  style={{ color: "white" }}
                >
                  <FaInstagram size={30} />
                  <FaWhatsapp size={30} />
                  <CiFacebook size={30} />
                  <FaTwitter size={30} />
                </div>
              </div>
            </Col>
            <Col>
              <Parallax bgImage="../src/images/HomeBanner1.png" strength={500} bgImageStyle={{width:"100%", height:"auto"}}>
                <div style={{height:"750px"}}>hiii</div>
              </Parallax>
            </Col>
          </Row>
        </Container>
        <CarouselHome />
      </Container>
    </>
  );
};

export default HomeBanner;
