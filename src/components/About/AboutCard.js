import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            <br /> Para hablar del origen de la robótica, se debe nombrar desde Aristóteles y sus ideas sobre ‘herramientas automatizadas’ hasta Henry Ford, pasando por Leonardo Da Vinci y su caballero mecánico o Isaac Asimov. En este punto se nombran los hitos que han supuesto verdaderos avances hacia la automatización y la robótica móvil autónoma, ya a mediados del siglo XX.

            <br/>Se considera robótica móvil autónoma a aquella que es capaz de tomar decisiones en entornos cambiantes sin necesidad de supervisión por parte de un operario. Algunos datos históricos relevantes serían los siguientes:
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 50s, Inglaterra. ELSIE (Electro-Light-Sensitive Internal-External) es el primer robot móvil de la historia. Sus capacidades técnicas eran todavía muy limitadas. Realmente se trataba de un robot electromecánico sensible a la luz
              con estabilidad interna y externa
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> 60s, Standford Research Institute. SHAKEY: robot que ya incorporaba sensores táctiles y cámara de visión. Podía desplazarse por el suelo gracias a dos computadores (uno a bordo y otro en remoto) que estaban conectados por radio. 
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> 70s, MARS-ROVER: plataforma que integraba un brazo mecánico, sensores de proximidad, un dispositivo telemétrico láser y cámaras estéreo. Fue desarrollado por la NASA para explorar terrenos hostiles o desconocidos.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> 80’s, CART del SRI: plataforma que modelaba obstáculos gracias a coordenadas cartesianas en sus vértices.
            </li>
            <br/>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Vídeeo de apoyo!"{" "}
          </p>
          <iframe  margin-left= "auto" margin-right = "auto" display = "auto" width="560" height="315" src="//www.youtube.com/embed/4Q3vfQKaCQI"  allowfullscreen></iframe>  
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
