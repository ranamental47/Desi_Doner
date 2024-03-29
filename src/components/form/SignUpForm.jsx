import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AnchorTags, Container, MyForm, SignupBtn } from './Form.styles';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState('');
const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        setError('Please fill out all the fields');
        return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Retrieve existing user data from local storage or initialize to an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Check if the email is already registered
    const existingUser = existingUsers.find(user => user.email === email);
    if (existingUser) {
      setError("Email already registered");
      return;
    }
    const newUser = { firstName, lastName, email, password };
    existingUsers.push(newUser);
    // Save updated user data to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setIsSignedUp(true);
    setError('');
    setTimeout(() => {
        navigate("/login")
      }, 1000);
  };

  return (
    <>
      <Container>
        <MyForm>
          <Form onSubmit={handleSignUp}>
            <div>
              <h1>Sign Up here</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingPassword" label="Set New Password">
                <Form.Control
                  type="password"
                  placeholder="Set New Password"
                  value={password}
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <FloatingLabel controlId="floatingPassword" label="Confirm New Password">
                <Form.Control
                  type="password"
                  placeholder="Confirm New Password"
                  style={{ boxShadow: 'none', background: 'transparent', border: '2px solid rgba(252, 238, 213, 1'}}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FloatingLabel>
              <AnchorTags>
                <Link to="/login">Already have an Account</Link>
              </AnchorTags>
            </Form.Group>
            <SignupBtn>
            <Button variant="dark" type="submit">
              Sign Up
            </Button>
            {error && <p style={{ color: 'red', paddingTop: '20px'}}>{error}</p>}
            {isSignedUp && <p>Your Account has been Created. Thank you!</p>}
            </SignupBtn>
          </Form>
        </MyForm>
      </Container>
    </>
  );
};

export default SignUpForm;
