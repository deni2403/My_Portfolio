import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container fluid>
        <Row>
          <Col>
            <SectionHeader
              title="Contact"
              description="For any inquiries, project proposals, or just a friendly chat about web development, I'm just a message away. Let's start a conversation and explore the possibilities together. "
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center flex-wrap">
          <Col lg="7">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
