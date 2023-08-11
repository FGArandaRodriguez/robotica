import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            <br /> La robótica es una disciplina que se encarga del diseño, construcción, operación y utilización de robots. Un robot es una máquina o dispositivo programable que es capaz de realizar tareas de manera autónoma o semiautónoma, generalmente en respuesta a instrucciones predefinidas o estímulos del entorno. Estas máquinas pueden variar en complejidad, desde simples robots industriales que realizan tareas repetitivas en líneas de ensamblaje hasta sofisticados robots humanoides que pueden interactuar con el entorno de manera más similar a los seres humanos.

            <br/>
            <br/>La robótica involucra una amplia gama de disciplinas, como la ingeniería mecánica, la electrónica, la informática, la inteligencia artificial y la ingeniería de control. Los robots pueden ser utilizados en diversas aplicaciones, incluyendo la industria manufacturera, la exploración espacial, la medicina, la agricultura, la logística, la investigación científica y el entretenimiento, entre otros.
            <br />
            <br />
            
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
