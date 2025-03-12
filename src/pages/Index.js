import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Stephane Cormier's personal website. Experienced Full-Stack Developer specializing in "
      + 'JavaScript, TypeScript, Angular, React, and cloud-based solutions.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to My Portfolio</Link>
          </h2>
          <p>
            Showcasing my work in Full-Stack Development, JavaScript frameworks,
            and scalable cloud-based solutions.
          </p>
        </div>
      </header>
      <p>
        Hi, I&apos;m <strong>Stephane Cormier</strong>, a senior software engineer with
        over 13 years of experience in <strong> JavaScript, TypeScript, Angular,
          React, and cloud architecture</strong>.
      </p>
      <p>
        Explore my <Link to="/resume">resume</Link>, check out my <Link to="/projects">projects</Link>, or
        <Link to="/contact"> contact</Link> me for collaboration opportunities.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/scormier89/portfolio" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
