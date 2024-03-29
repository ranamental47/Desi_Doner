import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AnchorTags, Btn, Container, LoginBtn, MyForm } from './Form.styles';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
        setError('Email is Required!');
        return;
    }
    if (!password) {
        setError('password is Required!');
        return;
    }
    const usersData = JSON.parse(localStorage.getItem('users'));
    if (!usersData) {
      setError('No users found. Please sign up first.');
      return;
    }
    const user = usersData.find(user => user.email === email);
    if (user && user.password === password) {
      setError('');
    //   window.location.href = "/";
    navigate("/");
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Container>
        <MyForm>
          <Form onSubmit={handleLogin}>
            <div>
              <h1>Login here</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Email address</strong></Form.Label>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Password</strong></Form.Label>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <AnchorTags>
                <Link to="/signup">Create an Account</Link>
                <Link to="/login">forget password?</Link>
              </AnchorTags>
            </Form.Group>
            <LoginBtn>
            <Button variant="dark" type="submit">
              Login
            </Button>
            {/* <Btn type='submit'>Login</Btn> */}
            {error && <p style={{ color: 'red', paddingTop: '20px'}}>{error}</p>}
            </LoginBtn>
          </Form>
        </MyForm>
      </Container>
    </>
  );
};

export default LoginForm;
