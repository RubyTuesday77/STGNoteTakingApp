import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

interface LoginProps {
    showAlert: (msg: string, type: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {

    // Declare server host
    const host = 'http://localhost:5001';
    const [credentials, setCredentials] = useState<{ email: string; password: string }>({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('authToken', json.authToken);
            navigate('/');
            props.showAlert('Logged in successfully!', 'success');
        } else {
            props.showAlert('Invalid credentials!', 'danger');
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

  return (
    <Container className='mt-3' style={{ width: '70%' }}>
        <Form onSubmit={ handleSubmit }>
            <h2>Log In to Continue</h2>
            <Form.Group className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' value={ credentials.email } id='email' name='email' onChange={ onChange }  autoComplete='off' aria-describedby='emailHelp' />
                <Form.Text id='emailHelp' className='text-muted'>We'll never share your email address with anyone</Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' value={ credentials.password } id='password' name='password' onChange={ onChange } autoComplete='off' />
            </Form.Group>
            <Button type='submit' variant='primary'>Submit</Button>
        </Form>
    </Container>
  );
};


export default Login;