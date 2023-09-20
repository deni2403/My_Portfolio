import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function SkillTech({ items }) {
  return (
    <Container className="skill-section__tech d-flex justify-content-center flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="skill-section__tech-img">
          <img src={item.imgPath} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </Container>
  );
}

SkillTech.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SkillTech;
