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
import CarouselHome from "./CarouselHome";
import photo1 from "../images/BannerPhoto.png";
import { IoStorefrontSharp } from "react-icons/io5";
import Items from "./Items";


const HomeBanner = () => {
  return (
    <>
      <Container fluid className="mb-4">
        <Row>
          <Col style={{ background: "#ECE8EA"}}>
           <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <div>
                        <IoStorefrontSharp size={100} />

              <p className="sub-heading">NEW ARRIVALS</p>
              <span className="main-heading"><span style={{color:"#FF7851"}}>Best Price</span> This Year</span>
              <p className="text">
                Discover endless possibilities at EasyStore your ultimate
                destination <br />
                for seamless online shopping! Buy from our user-friendly
                website.
              </p>
              <Button
              variant="dark"
              style={{ backgroundColor: "", color: "white", float:"left"}}
            >
              SHOP NOW
            </Button>
            </div>
           
           </div>
          </Col>
          <Col style={{ background: "#ECE8EA", height: "650px" }}>
            <img
              src={photo1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
      <Items />
      <CarouselHome />
    </>
  );
};

export default HomeBanner;
