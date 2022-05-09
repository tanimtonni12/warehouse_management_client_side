
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://intense-taiga-61434.herokuapp.com/product/my?email=${email}`;
            await fetch(url)
                .then(res => res.json())
                .then(data => setItems(data))
        }
        getItems();
    }, [user])

    const element = <FontAwesomeIcon icon={faTrashCan} />
    const handleDelete = id => {
        const proceed = window.confirm('are you sure that you want to delete this item?');
        if (proceed) {
            const url = `https://intense-taiga-61434.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })

        }
    }
    return (
        <div>
            <table className="table table-striped table-hover container caption-top">
                <caption className='text-center fs-2 fw-bold'>List of Inventories</caption>
                <thead className='table-danger'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(item =>


                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.Supplier}</td>
                                <td className='d-md-flex align-items-center justify-content-center'><button onClick={() => handleDelete(item._id)} className='btn text-danger '>{element}</button>
                                    <Link className='text-decoration-none bg-secondary text-white' to={`/inventory/${item._id}`}>Manage</Link>
                                </td>

                            </tr>

                        )}
                </tbody>

            </table>

            <div className='text-center my-5'>
                <button className='btn btn-secondary'><Link className='text-decoration-none text-white' to='/addItems'>Add New Item</Link></button>
            </div>
        </div>
    );
}

export default MyItems;