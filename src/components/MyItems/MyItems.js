
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/product/my?email=${email}`;
            await fetch(url)
                .then(res => res.json())
                .then(data => setItems(data))
        }
        getItems();
    }, [user])
    return (
        <div>
            <h2>My Items {items.length}</h2>

        </div>
    );
};

export default MyItems;