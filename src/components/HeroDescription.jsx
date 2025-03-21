import React from "react";
import { Container } from "react-bootstrap";

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
          Computer Science graduate with a strong passion for web development
          and problem solving. Eager to contribute to a dynamic professional
          team, work on real-world projects, and continuously expand my skills
          in software development.
        </p>
      </Container>
    </>
  );
}

export default HeroDescription;
