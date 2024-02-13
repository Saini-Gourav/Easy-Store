import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import photo1 from "../images/HomeBanner.jpg";
import CarouselHome from "./CarouselHome";
import { IoStorefrontSharp } from "react-icons/io5";

const HomeBa = () => {
  return (
    <>
      <Container className="mt-4 mb-4">
        <div className="parallax">
          {/* <img src={photo1} alt="" style={{width:"100%", height:"710px"}}/> */}
          <div className="p-4">
            <h1>Easy-Store</h1>
            <IoStorefrontSharp size={100} />
          </div>
          <div className="p-4">
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
            <p className="mt-5" style={{ fontWeight: "500", fontSize: "16px" }}>
              Discover endless possibilities at EasyStore – your ultimate
              destination <br /> for seamless online shopping! Buy from our
              user-friendly website
            </p>

            <Button variant="success" style={{ width: "20%" }} className="mt-5">
              Buy Now
            </Button>
          </div>
        </div>

        <CarouselHome />
      </Container>
    </>
  );
};

export default HomeBa;
