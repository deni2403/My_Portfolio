import React from 'react';
import { Container } from 'react-bootstrap';

function HeroDescription() {
  return (
    <>
      <Container className="hero-section__name mt-3">
        <h1>
          Hi I'm <span>Deni.</span>
        </h1>
      </Container>
      <Container className="hero-section__description mt-3">
        <p>
          Passionate Computer Science undergraduate with web development skills
          seeks opportunity to contribute to dynamic professional team with good
          problem-solving skills in web development. Dedicated to continuous learning.
        </p>
      </Container>
    </>
  );
}

export default HeroDescription;
