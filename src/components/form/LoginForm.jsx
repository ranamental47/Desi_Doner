import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, MyForm } from './Form.styles';

const LoginForm = () => {
  return (
    <>
    <Container>
        <MyForm>
            <Form>
                <div>
                    <h1>Login here</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="dark" type="submit">Login</Button>
            </Form>
        </MyForm>
    </Container>
    </>
  )
}

export default LoginForm
