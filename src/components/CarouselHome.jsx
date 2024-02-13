import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from 'react-bootstrap';
// import Ratio from 'react-bootstrap/Ratio';

import photo1 from "../images/carousel2.png"
import photo2 from "../images/photo2.jpg"
import photo3 from "../images/carousel3.png"

function CarouselHome() {
  const imageStyle = {
    width: "100%",
    height: "600px    ",

    
    
    // objectFit: "cover",
  };

  return (
   <>
   <Container  className="mt-5 mb-4">
    <Row>
    <Carousel>
      <Carousel.Item>
        <img src={photo1} alt="" style={imageStyle} />
        {/* <Ratio aspectRatio="21x9">
        <img src={photo2} alt="" />
      </Ratio> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo2} alt="" style={imageStyle} />
        {/* <Ratio aspectRatio="21x9">
        <img src={photo3} alt="" />
      </Ratio> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo3} alt="" style={imageStyle} />
        {/* <Ratio aspectRatio="21x9">
        <img src={photo4} alt="" />
      </Ratio> */}
      </Carousel.Item>
    </Carousel>
    </Row>
   </Container>
   </>
  );
}

export default CarouselHome;
