import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg2 from "../../Assets/laptop4.png";
import tabla1 from "../../Assets/tab1.png";
import tabla2 from "../../Assets/tab2.png";
import tabla3 from "../../Assets/tab3.png";
import tabla4 from "../../Assets/tab4.png";


function Definition() {
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
              Definición y Clasificación de la <strong className="purple">Robótica</strong>
            </h1>
            <Aboutcard id="#1"/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
            <img src={laptopImg2} alt="about" className="img-fluid" />
            
          </Col>
        </Row>
        <h1 className="project-heading">
        Clasificaciónde la <strong className="purple">Robótica </strong>
        </h1>
        <card className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
        La robótica no tiene una definición clara de ella misma. El mismo Joseph Engelberger, conocido como el padre de la robótica, expresó claramente esta idea con su frase: "No puedo definir un robot, pero reconozco uno cuando lo veo".
        La RIA (Asociación de Industrias Robóticas fundada en 1974 y dedicada únicamente al servicio la robótica industrial) define los robots como: "un manipulador multifuncional reprogramable, capaz de mover piezas, herramientas o dispositivos especiales, según trayectorias variables, programadas para realizar tareas diversas".
        Los robots pueden ser clasificados de muchas maneras, desde las funciones que realizan, su inteligencia, el control que se puede ejercer sobre ellos y hasta el lenguaje de programación con el que se programa. Casi todas las definiciones y clasificaciones existentes responden a los robots industriales, que son los mas ampliamente utilizados. 
        Se pueden encontrar muchas clasificaciones de los robots dependiendo de su grado de control, inteligencia, arquitectura, grados de libertad, forma, fin para el que son desarrollados, etc. Algunas clasificaciones son las siguientes: 
        </p>
        Clasificación General:
        <Col
            md={15}
            style={{ paddingTop: "32px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={tabla1} alt="about" className="img-fluid" />
            
        </Col>
        Clasificación de acuerdo a la Federación Internacional de Robótica
        <Col
            md={15}
            style={{ paddingTop: "32px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={tabla2} alt="about" className="img-fluid" />
        </Col>
        Clasificación por Generación (La generación de un robot se determina por el orden histórico de desarrollos en la robótica.)
        <Col
            md={15}
            style={{ paddingTop: "32px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={tabla3} alt="about" className="img-fluid" />
        </Col>
        Clasificación de Robots de servicio
        <Col
            md={15}
            style={{ paddingTop: "32px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={tabla4} alt="about" className="img-fluid" />
        </Col>
        </card>



      </Container>
    </Container>
  );
}

export default Definition;
