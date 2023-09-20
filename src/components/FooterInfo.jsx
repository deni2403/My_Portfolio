import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';

function FooterInfo() {
  return (
    <Container className="contact-information">
      <div className="contact-information__icon">
        <FaLocationDot />
        <div className="contact-information__desc">
          <h5>Address</h5>
          <p>Medan, North Sumatera, Indonesia</p>
        </div>
      </div>
      <div className="contact-information__icon">
        <FaPhone />
        <div className="contact-information__desc">
          <h5>Phone</h5>
          <p>(+62) 821-9028-0243</p>
        </div>
      </div>
      <div className="contact-information__icon">
        <AiOutlineMail />
        <div className="contact-information__desc">
          <h5>Email</h5>
          <p>deni240397@gmail.com</p>
        </div>
      </div>
    </Container>
  );
}

export default FooterInfo;
