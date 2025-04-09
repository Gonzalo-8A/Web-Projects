// import { useState } from 'react'
import reactLogo from "./assets/react-logo-xs.png";
import { CORE_CONCEPTS } from "./data.js";
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

function CoreConcepts({imagePath, title, description}) {
  return (
    <div className="coreConceptsCard">
      <img src={imagePath} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
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

          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>

        </div>
      </section>
      {/* <main>
        <h2></h2>
      </main> */}
    </div>
  );
}

export default App;
