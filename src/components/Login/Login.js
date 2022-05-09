import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user1) {

        navigate(from, { replace: true });

    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

        fetch(`https://intense-taiga-61434.herokuapp.com/login`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken)
                navigate(from, { replace: true });


            })

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-75 mx-auto shadow p-3 bg-body rounded my-5'>

            <h2 className='text-center fw-bold text-secondary my-3'>Please Login</h2>
            <Form className='w-75 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-25 mx-auto mt-2 d-block mb-5" size='sm' type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p>New to WareHouse? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='d-md-flex align-items-center'>Forget Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <div>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                </div>
                {errorElement}
                <div className=''>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-secondary w-sm-100 d-flex align-items-center mx-auto my-2'>
                        <img style={{ width: '30px', height: '30px' }} src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>


                </div>
            </div>
            <ToastContainer />

        </div>

    );
};

export default Login;