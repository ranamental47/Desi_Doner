import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, MyForm } from './Form.styles';

const SignUpForm = () => {
  return (
    <>
    <Container>
        <MyForm>
            <Form>
                <div>
                    <h1>Sign Up here</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                        <Form.Control className="Haseeb" type="text" placeholder="First Name" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                        <Form.Control className="Haseeb" type="text" placeholder="First Name" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control className="Haseeb" type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Set New Password">
                        <Form.Control className="Haseeb" type="password" placeholder="Set New Password" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Confirm New Password">
                        <Form.Control className="Haseeb" type="password" placeholder="Confirm New Password" />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="dark" type="submit">Sign Up</Button>
            </Form>
        </MyForm>
    </Container>
    </>
  )
}

export default SignUpForm
