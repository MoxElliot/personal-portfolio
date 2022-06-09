import { Button, Form } from "react-bootstrap";

export const ContactForm = () => {

return (
    <Form>
        <Form.Group className="mb-3 w-75">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder="sample@company.com" />
        </Form.Group>
        <Form.Group className="mb-3 w-75">
            <Form.Label>Message Me</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message here..."/>
        </Form.Group>
        <Button variant="secondary" type="submit">Submit</Button>
    </Form>

)}