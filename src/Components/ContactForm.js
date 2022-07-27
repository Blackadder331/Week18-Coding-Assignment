import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ContactForm() {
  return (
    <Form>
        <div className='row contact-from'>
      <FloatingLabel
        controlId="floatingTextareaName"
        label="Name"
        className="mb-3 col-6 contact-from-item"
      >
        <Form.Control type="text" placeholder="Full name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingTextareaCompany"
        label="Company"
        className="mb-3 col-6 contact-from-item"
      >
        <Form.Control type="text" placeholder="Company name" />
      </FloatingLabel>

      <Form.Floating className="mb-3 col-6 contact-from-item">
        <Form.Control
          id="floatingInputEmail"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputEmail">Email</label>
      </Form.Floating>

      <FloatingLabel
        controlId="floatingTextareaPhone"
        label="Phone"
        className="mb-3 col-6 contact-from-item"
      >
        <Form.Control type="tel" placeholder="(000) 000-0000" />
      </FloatingLabel>


      <FloatingLabel controlId="floatingTextarea2" className="mb-3 col-sm contact-from-item" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Write your message here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        <br></br>
        <br></br>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;