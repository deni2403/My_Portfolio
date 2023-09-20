import React from 'react';
import { Container } from 'react-bootstrap';

function FooterNavigation() {
  return (
    <Container className="footer-navigation">
      <h5>Navigation</h5>
      <ul>
        <li>
          <a href="#hero">About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Container>
  );
}

export default FooterNavigation;
