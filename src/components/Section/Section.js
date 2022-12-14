import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Section.css";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import a3 from "../../img/a3.png";
import img5 from "../../img/img5.png";
import Testimonial from "../Testimonial/Testimonial";

function Section() {
  return (
    <>
      <div className="section">
        <div className="sectionTop">
          <h3>Rooms That Makes Us Among the Best Digha Hotels</h3>
          <p>Fully Equipped Room with all facilities in digha</p>
        </div>
        <div className="clearfix"></div>
        <div className="sectionBottom">
          <Container fluid>
            <Row xs={1} md={3} lg={3}>
              <Col className="sec-img">
                <img src={img2} alt="" />
              </Col>
              <Col className="sec-img">
                <img src={img3} alt="" />
              </Col>
              <Col className="sec-img">
                <img src={a3} alt="" />
              </Col>

              <div className="clearfix"></div>
            </Row>
          </Container>
        </div>
        <div className="reason">
          <h3>REASONS TO CHOOSE NEW SONAR BANGLA RESORT DIGHA</h3>
          <p>দীঘায় আপনাকে স্মরণীয় করে তুলুন - একটি সম্পূর্ণ হলিডে প্যাকেজ</p>

          <div className="reasonImg">
            <div>
              <img src={img5} alt="" />
            </div>

            <Container fluid className="con">
              <Row className="rw">
                <Col className="col1">Multicuisine Restaurant</Col>

                <Col className="col1">Park for all</Col>

                <Col className="col1">Common space for meetup</Col>
              </Row>
              <Row className="rw">
                <Col className="col1">Awesome views</Col>
                <Col className="col1">Affordable rates</Col>
                <Col className="col1">Home like experience</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <Testimonial />
    </>
  );
}

export default Section;
