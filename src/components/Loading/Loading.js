import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='text-center container'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;