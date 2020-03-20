import React, { useRef } from 'react';
import './App.css';

import Navbar from './components/navbar.js';
import Typewriter from './components/typewriter.js';
import Projects from './components/project-display';
import projects from './components/projects.js';
import Contact from './components/Contact';


function App() {
  const words = ['Developer', 'Creator', 'Engineer', 'Coder'];
  const references = {
    projects: useRef('projects'),
    contact: useRef('contact'),
  }

  return (
    <div className="App">
      <Navbar references={references} />

      <div className="header">
        <h1 id="i-am">I'm a </h1>

        <Typewriter words={words} wait={1500} />
        <h1>|</h1>
      </div>

      <div className="profile">
        <p>My name is Eva Veskova Jackson. Welcome to my portfolio.</p>
      </div>

      <Projects projects={projects} references={references.projects} />
      <Contact references={references.contact} />
    </div>
  );
}

export default App;
