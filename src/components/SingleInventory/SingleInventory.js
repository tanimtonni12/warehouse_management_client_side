import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import icon from '../../images/taka.png'

const SingleInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { _id, img, name, price, quantity, description, Supplier } = item;
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    const handleDelivered = () => {
        let Remaining = parseInt(+item.quantity) - 1;
        let newInventory = { img, name, price, quantity: Remaining, description, Supplier };
        setItem(newInventory)
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setItem(data);
                toast("Delivered succeeded!!!!!!!!!!!")
            })
    }

    //restock
    const handleRestock = (e) => {
        e.preventDefault();
        let updatedQuantity = parseInt(+item.quantity) + parseInt(e.target.upQuantity.value);
        let newInventory = { img, name, price, quantity: updatedQuantity, description, Supplier }
        setItem(newInventory)
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setItem(data);
                toast("Restock succeeded!!!!!!!!!!!")
            })
        e.target.reset();





    }





    return (
        <div>
            <div className="card mb-3 w-75 mx-auto">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={item?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className="card-body">
                            <h5 className="card-title">{item?.name}</h5>
                            <h5 className="card-title">Price: <img src={icon} alt="" /> {item?.price}</h5>
                            <p className="card-text">Description: {item?.description}</p>
                            <p className="card-text">Supplier: {item?.Supplier}</p>
                            <p className="card-text">Quantity: {item?.quantity}</p>

                        </div>
                        <div>
                            <button onClick={() => handleDelivered(quantity)} className='btn btn-secondary ms-2 my-2'>Delivered</button>
                            <div className='ms-2'>
                                <form onSubmit={handleRestock}>
                                    <input type="number" name='upQuantity' placeholder='Update Stock' />
                                    <button className='btn btn-secondary ms-2'>Restock</button>
                                </form>
                                <ToastContainer />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventory;