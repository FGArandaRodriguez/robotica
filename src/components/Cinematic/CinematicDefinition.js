import React,  { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg6 from "../../Assets/laptop6.png";
import pdf from "./husky.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import PDFViewer from "./PDFViewer";


function Cinematic() {
  const [width, setWidth] = useState(1200);
  const pdfUrl = pdf

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const numPages = 31; // Cambia esto al número total de páginas en tu PDF

  
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Cinemática <strong className="purple"></strong>
            </h1>
            <Aboutcard id="#1"/>


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
            <img src={laptopImg6} alt="about" className="img-fluid" />

            
            
          </Col>

        </Row>
        <h1 className="project-heading">
       
        </h1>
        <card className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>

        </p>
         </card>



      </Container>
    </Container>
  );
}

export default Cinematic;
