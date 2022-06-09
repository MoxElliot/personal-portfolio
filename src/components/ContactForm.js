import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ReactDOM } from "react";

export const ContactForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submited");
    }
{/*Start Here: https://medium.com/create-a-clocking-in-system-on-react/handle-form-submissions-in-react-to-a-mongodb-backend-a90cac7c81e9*/}
return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-75">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
                type="email" 
                name="email" 
                nameplaceholder="sample@company.com" 
                values={inputs.email || ""}
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3 w-75">
            <Form.Label>Message Me</Form.Label>
            <Form.Control 
                as="textarea" 
                name="message" 
                rows={3} 
                placeholder="Your message here..."
                value={inputs.message || ""}
                onChange={handleChange}    
            />
        </Form.Group>
        <Button variant="secondary" type="submit">Submit</Button>
    </Form>
)}