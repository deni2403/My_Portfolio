import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function PortfolioItem({ items }) {
  return (
    <Container
      fluid
      className="portfolio-section__projects d-flex justify-content-center flex-wrap"
    >
      {items.map((item, index) => (
        <Card key={index} style={{ minHeight: '26rem', width: '22rem' }}>
          <Card.Img variant="top" src={item.imgPath} />
          <Card.Body>
            <Container className="d-flex">
              <Card.Title>{item.name}</Card.Title>
              <div className="portfolio-link ms-auto">
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a
                  href={item.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </Container>
            <Container className="portfolio-tech d-flex">
              {item.tech.map((e, index) => (
                <p key={index} className="portfolio-tech__item">
                  {e}
                </p>
              ))}
            </Container>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

PortfolioItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PortfolioItem;
