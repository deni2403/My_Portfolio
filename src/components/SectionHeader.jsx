import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SectionHeader({ title, description }) {
  return (
    <Container className="section-header__title">
      <h2>{title}</h2>
      <br />
      <p>{description}</p>
    </Container>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
