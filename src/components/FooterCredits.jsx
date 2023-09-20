import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

function FooterCredits() {
  return (
    <Container className="created-by">
      <div className="created-by__icon d-flex justify-content-center">
        <a
          href="https://github.com/deni2403"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/deni2403/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <p>© 2023 - Created By Deni.</p>
      </div>
    </Container>
  );
}

export default FooterCredits;
