import React from 'react';
import { Container } from 'react-bootstrap';

function HeroImage() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center hero-section__image"
      fluid
    >
      <img src="/deni.png" alt="Profile Picture" className="rounded-circle" />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#016A70"
          d="M67.1,-23.8C72.5,-5.1,52.6,19.9,28.1,37.4C3.6,54.9,-25.4,64.9,-40.8,54.2C-56.1,43.5,-57.9,12.1,-48.8,-11.6C-39.7,-35.3,-19.9,-51.3,5.5,-53.1C30.8,-54.9,61.6,-42.5,67.1,-23.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </Container>
  );
}

export default HeroImage;
