import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroDescription from '../components/HeroDescription';
import HeroImage from '../components/HeroImage';

function Hero() {
  return (
    <header id="hero" className="hero-section">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6" md="auto" sm="auto">
            <HeroDescription />
          </Col>
          <Col lg="6" md="auto" sm="auto">
            <HeroImage />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
