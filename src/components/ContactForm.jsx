import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_ijyvc5e',
        'template_qs6h5cx',
        form.current,
        '0cRU8htAyIiJcI69J',
      );

      console.log(result.text);
      setEmailSent(true);
      document.querySelector('.contact-form').reset();
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <div className="contactForm-container">
      {emailSent && (
        <div className="d-flex justify-content-center rounded p-2 w-50 text-light bg-success">
          Email has been sent, Thank You for contacting !
        </div>
      )}
      <Form ref={form} onSubmit={sendEmail} className="contact-form">
        <Form.Control name="user_name" type="text" placeholder="Name" />
        <Form.Control name="user_email" type="email" placeholder="Email" />
        <Form.Control name="message" as="textarea" placeholder="Message" />
        <Button type="submit" value="Send">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
