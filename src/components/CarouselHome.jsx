import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from 'react-bootstrap';
// import Ratio from 'react-bootstrap/Ratio';

import photo2 from "../images/photo2.jpg"
import photo3 from "../images/photo3.jpg"
import photo4 from "../images/photo4.jpg"

function CarouselHome() {
  const imageStyle = {
    width: "100%",
    height: "300px",
    
    
    objectFit: "contain",
  };

  return (
   <>
   <Container fluid className="mt-5">
    <Row>
    <Carousel>
      <Carousel.Item>
        <img src={photo2} alt="" style={imageStyle} />
        {/* <Ratio aspectRatio="21x9">
        <img src={photo2} alt="" />
      </Ratio> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo3} alt="" style={imageStyle} />
        {/* <Ratio aspectRatio="21x9">
        <img src={photo3} alt="" />
      </Ratio> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo4} alt="" style={imageStyle} />
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
