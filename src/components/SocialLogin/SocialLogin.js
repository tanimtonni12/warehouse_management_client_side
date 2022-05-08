import React from 'react';
import google from '../../images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();


    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
        navigate(from)


    }

    return (
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
    );
};

export default SocialLogin;