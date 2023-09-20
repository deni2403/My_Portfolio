import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillTech from '../components/SkillTech';
import SectionHeader from '../components/SectionHeader';
import skills from '../utils/skill-svg-data';

function Skills() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(skills);
  }, []);

  return (
    <section id="skills" className="skill-section">
      <Container fluid>
        <Row>
          <Col>
            <Container className="skill-section__title">
              <SectionHeader
                title="Skills"
                description="I have been on a continuous journey of learning in the field of web development, constantly experimenting with cutting-edge technologies and frameworks. Here, you can explore a summary of my skills."
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillTech items={items} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
