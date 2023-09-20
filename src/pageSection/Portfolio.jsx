import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioItem from '../components/PortfolioItem';
import SectionHeader from '../components/SectionHeader';
import portfolios from '../utils/portfolio-data';

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(portfolios);
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <Container fluid>
        <Row>
          <Col>
            <SectionHeader
              title={'Portfolio'}
              description={
                'Welcome to my portfolio, where I showcase my continuous learning journey and passion for web development through a collection of diverse projects.'
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PortfolioItem items={items} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
