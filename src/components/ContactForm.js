import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const ContactForm = () => {
    const [form, setform] = useState({
        email: "",
        message:"",
    });

    const navigate = useNavigate();
 
    const handleChange = (value) => {
        return setform((prev) => {
            return {...prev, ...value};
        });
    }

    async function handleSubmit(e){
        e.preventDefault();

        const newContact = { ...form };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newContact),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setform({ email: "", message: ""});
    }


return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-75">
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control 
                type="email" 
                id="email" 
                nameplaceholder="sample@company.com" 
                value={form.email}
                onChange={(e) => handleChange({ email: e.target.value })}
            />
        </Form.Group>
        <Form.Group className="mb-3 w-75">
            <Form.Label>Message Me</Form.Label>
            <Form.Control 
                as="textarea" 
                id="message" 
                rows={3} 
                placeholder="Your message here..."
                value={form.message}
                onChange={(e) => handleChange({ message: e.target.value })}    
            />
        </Form.Group>
        <Button 
            variant="secondary" 
            type="submit"
            value="Create message"
        >
            Submit
        </Button>
    </Form>
)}