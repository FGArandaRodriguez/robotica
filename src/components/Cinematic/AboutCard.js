import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg5 from "../../Assets/laptop5.png";


function AboutCard() {
  const pdfUrl = 'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:01779729-d5e8-3559-ada9-43fde093bc5f';
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            La cinemática del robot estudia el movimiento del mismo con respecto a un sistema de referencia fijo 
            sin considerar las fuerzas y momentos que originan dicho movimiento.
            <br/>
            <li className="about-activity">
              <ImPointRight /> Busca las relaciones entre la localización (posición y orientación) del extremo del robot y los valores de sus
              coordenadas articulares.
            </li>
            <li className="about-activity">
              <ImPointRight /> Busca las relaciones entre la localización (posición y orientación) del extremo del robot y los valores de sus
              coordenadas articulares.
            </li>
            <br />
            
          </p>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Cinemática <strong className="purple">Directa V</strong>S Inversa
            </h1>
            <p style={{ textAlign: "justify" }}>
            Desde el punto de vista de la robótica, el problema cinemático inverso es más complejo.
          </p>
          <img src={laptopImg5} alt="cinemáticas"  position="relative" className="img-fluid"  />
          <br/> 
          <div >
          {/*<iframe class="embed-responsive-item" allowfullscreen src="https://acrobatservices.adobe.com/view-sdk/viewer.js" type="application/pdf" width="100%" height="600px" ></iframe>*/}
          
          </div>
          

          </Col>
          
          

        </blockquote>
        
      </Card.Body>

    </Card>
    
  );
}

export default AboutCard;
