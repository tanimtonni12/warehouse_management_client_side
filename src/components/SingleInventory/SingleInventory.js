import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    return (
        <div>
            <h2>You are about to detail: {item.name}</h2>
            <div className='text-center'>

            </div>
        </div>
    );
};

export default SingleInventory;