import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import laptopImg2 from "../../Assets/about2.png";
import Toolstack from "./Toolstack";

function About() {
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
              História de la <strong className="purple">Robótica</strong>
            </h1>
            <Aboutcard id="#1"/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <img src={laptopImg2} alt="about" className="img-fluid" />
            
          </Col>
        </Row>
        <h1 className="project-heading">
        ¿Cuál es el origen de la palabra <strong className="purple">Robótica? </strong>
        </h1>
        <card className="quote-card-view">
        El término robot se deriva de la palabra checa «robota». La utiliza por primera vez el escritor de ciencia ficción Karel Čapek en su obra dramática R. U. R. (Robots Universales Rossum), escrita en 1920, para designar a unas máquinas pensantes que se sublevan y terminan por matar a su creador. En la traducción al inglés de la obra, la palabra checa robota, fue traducida como robot.
        <br/>
        El término robótica fue acuñado por Isaac Asimov, quien la definió como la ciencia que estudia a los robots. Asimov creó también las tres leyes de la robótica. En la ciencia ficción, el hombre ha imaginado a los robots visitando nuevos mundos, haciéndose con el poder o, simplemente, aliviándolo de las labores caseras. De cualquier manera, se han de cumplir las tres leyes de la robótica
        implementadas por Isaac Asimov: un robot debe ser inofensivo para los humanos, debe cumplir sus mandatos y debe proteger su propia integridad sin faltar a lo previo.
         
        <a HREF="https://scielo.isciii.es/pdf/aue/v31n3/v31n3a02.pdfl"> Más información a cerca de la História </a>
        <br/>
         
        </card>

      </Container>
    </Container>
  );
}

export default About;
