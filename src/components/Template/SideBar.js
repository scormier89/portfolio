import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Stephane Cormier</h2>
        <p>
          <a href="mailto:Stephane@scormier.com">Stephane@scormier.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Stephane. I am a{' '}
        <a href="https://www.linkedin.com/in/your-profile">full-stack software engineer </a>
        with over 13 years of experience in{' '}
        <a href="https://angular.io/">Angular</a>,{' '}
        <a href="https://react.dev/">React</a>,{' '}
        <a href="https://dotnet.microsoft.com/">C#</a>, and{' '}
        <a href="https://www.java.com/">Java (J2EE, Spring, Hibernate)</a>.
        I specialize in building{' '}
        <a href="https://azure.microsoft.com/en-us/">Azure cloud applications</a>,{' '}
        architecting enterprise-grade solutions, and optimizing CI/CD pipelines.
        Previously, I worked on large-scale insurance software at{' '}
        <a href="https://www.medaviebc.ca/en/">Medavie</a> and{' '}
        <a href="https://www.wtwco.com/">WTW</a>, where I developed{' '}
        <a href="https://gojs.net/">workflow visualization tools with GoJS</a>,
        designed custom data transformation engines, and automated{' '}
        <a href="https://kubernetes.io/">Kubernetes deployments</a> with Helm.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Stephane Cormier <Link to="/">scormier.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
