// import { useState } from 'react'
import reactLogo from "./assets/react-logo-xs.png";
import blocksLogo from "./assets/blocks-logo.png";
import mixLogo from "./assets/mix-logo.webp";
import settingsIcon from "./assets/settings-icon.png";
import stateLogo from "./assets/state-logo.png";
import "./App.css";

const reactTitles = ["React Fundamentos", "React Bases", "React Principios"];

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
  const titleWinner = reactTitles[getRandomIntInRange(0, 2)];

  return (
    <header>
      <img src={reactLogo} alt="React logo" />
      <h1>{titleWinner}</h1>
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <div className="coreConceptsCard">
      <img src={props.src} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div id="coreConceptsCards">
          <CoreConcepts
            src={blocksLogo}
            title="Componentes"
            description="El nucleo principal de construcción de una UI con React. La combinación de distintos componnentes logra una composición de una UI más manejable."
          />

          <CoreConcepts
            src={mixLogo}
            title="JSX"
            description="Una combinación de código JS Y HTML. Retorna contenido HTML potencialmente dinámico que será renderizado para componer la UI."
          />

          <CoreConcepts
            src={settingsIcon}
            title="Props"
            description="Proporcionan a los componentes la capacidad de poder tener atributos personalizables para que estos reciban información."
          />

          <CoreConcepts
            src={stateLogo}
            title="States"
            description="Principales manejadores de datos en React, cuando encuentran un cambio en los datos obligan al componente a re-renderizarse y actualizar la interfaz."
          />
        </div>
      </section>
      <main>
        <h2></h2>
      </main>
    </div>
  );
}

export default App;
