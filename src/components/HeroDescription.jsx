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
          A postgraduate student in Computer Science based in Indonesia with a
          passion for web development, a keen interest in the latest technology,
          and captivating design. My primary focus is on building responsive and
          engaging web experiences.
        </p>
      </Container>
    </>
  );
}

export default HeroDescription;
