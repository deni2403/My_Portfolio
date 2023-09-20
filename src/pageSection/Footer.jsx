import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterNavigation from '../components/FooterNavigation';
import FooterInfo from '../components/FooterInfo';
import FooterCredits from '../components/FooterCredits';

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="d-flex justify-content-center flex-wrap ms-auto">
          <Col className="ms-5 mt-5">
            <FooterNavigation />
          </Col>
          <Col className="ms-5 mt-5">
            <FooterInfo />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center flex-wrap mt-5 mb-3">
          <Col lg="auto" md="auto" sm="auto">
            <FooterCredits />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
