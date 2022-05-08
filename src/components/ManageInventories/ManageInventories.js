import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import useInventory from '../hooks/useInventory';


const ManageInventories = () => {

    const [items, setItems] = useInventory();
    const element = <FontAwesomeIcon icon={faTrashCan} />
    const handleDelete = id => {
        const proceed = window.confirm('are you sure that you want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
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
                        <th scope="col">Action</th>
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
                                <td><button onClick={() => handleDelete(item._id)} className='btn text-danger'>{element}</button></td>
                            </tr>

                        )}
                </tbody>

            </table>

            <div className='text-center my-5'>
                <button className='btn btn-secondary'><Link className='text-decoration-none text-white' to='/addItems'>Add New Item</Link></button>
            </div>
        </div>
    );
};
export default ManageInventories;