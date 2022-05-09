import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import Loading from '../Loading/Loading';
import { Button, Form } from 'react-bootstrap';



const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;


        createUserWithEmailAndPassword(email, password);
        console.log(email, password)

        navigate('/home');
    }

    return (
        <div className='shadow w-50 mx-auto p-3 bg-body rounded my-5'>
            <div className='register-form'>
                <h2 className='text-secondary fw-bold text-center my-3'>Please Register</h2>
                <Form className='w-75 mx-auto' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" >
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="dark w-25 mx-auto mt-2 d-block mb-5" size='sm' type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

            </div>

        </div>
    );
};

export default Register;