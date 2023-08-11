import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "História de la Robótica",
          "Definición",
          "Clasificación",
          "Cinemática directa e inversa",
          "Aplicaciones de la Robótica",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
