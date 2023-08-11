import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            ¿Quién <span className="purple"> Soy? </span> 
            </h1>
           
            <p className="home-about-body">
              Soy una persona enamorada de la programación con más de
                5 años de experiencia.
              <br />
              Programador, Maestro y Alumno 📚
              <br />
              <br />He aprendido diversos lenguajes de programación como lo son
              <i>
                <b className="purple"> C++, VisualBasic, C#, PHP, Javascript, MERN Stack </b>
              </i>
              <br />
              <br />
              Especializado en programación backend con &nbsp;
              <i>
                <b className="purple">Tecnologías Web & Python </b> 
                y todo lo relacionado con{" "}
                <b className="purple">
                  el análisis de datos.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por desarrollar proyectos con
              <b className="purple"> Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Javascript Moderno, Divers@s Bibliotecas y Frameworks
                </b>
              </i>
              &nbsp; cómo
              <i>
                <b className="purple"> React.js & Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SIGUEME</h1>
            <p>
              Es GRATIS <span className="purple">Conectate </span>Conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FGArandaRodriguez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/franklin-giovanni-aranda-rodr%C3%ADguez-2147a110a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
