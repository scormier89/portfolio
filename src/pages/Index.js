/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

function getYearsOfExperience() {
  const startDate = new Date('2010-06-15'); // Replace with your actual start date
  const today = new Date();
  const yearsOfExperience = today.getFullYear() - startDate.getFullYear();
  return yearsOfExperience;
}

const Index = () => (
  <Main
    description={
      "Stephane Cormier's personal website. Experienced Full-Stack Developer specializing in "
      + 'JavaScript, TypeScript, Angular, VueJS, React, C#, Java and cloud-based solutions.'
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
      <p><strong>Building Scalable Systems. Shaping Cloud Architecture. Delivering Production-Ready Code.</strong></p>
      <p>
        I’m Stephane Cormier, a cloud-focused senior full-stack engineer with {getYearsOfExperience()} years of experience.
        From modernizing enterprise frontends to deploying resilient microservices on Kubernetes, I build solutions that scale — fast, secure, and production-ready.
      </p>
      <p>
        Dive into my <Link to="/resume">resume</Link>, explore real-world <Link to="/projects">projects</Link>, or <Link to="/contact"> connect</Link> for collaboration.
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
