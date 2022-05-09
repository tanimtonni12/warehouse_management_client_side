import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import icon from '../../images/taka.png'
// comment
const SingleInventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { _id, img, name, price, quantity, description, Supplier, sold } = item;
    useEffect(() => {
        const url = `https://intense-taiga-61434.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    const handleDelivered = () => {
        let Remaining = parseInt(+item.quantity) - 1;
        let newInventory = { img, name, price, quantity: Remaining, description, Supplier, sold: sold + 1 };

        fetch(`https://intense-taiga-61434.herokuapp.com/product/${id}/delivered`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                setItem(newInventory)
                toast("Delivered succeeded!!!!!!!!!!!")
            })
    }

    //restock
    const handleRestock = (e) => {

        e.preventDefault();
        if (isNaN(parseInt(e.target.upQuantity.value))) {
            return toast('please enter a number');

        }
        else if (parseInt(e.target.upQuantity.value) < 1) {
            e.target.reset();
            return toast('please enter a positive number');
        }

        let updatedQuantity = parseInt(+item.quantity) + parseInt(e.target.upQuantity.value);
        if (updatedQuantity < 1) {
            return toast('Quantity can not be 0');
        }
        let newInventory = { img, name, price, quantity: updatedQuantity, description, Supplier, sold }

        fetch(`https://intense-taiga-61434.herokuapp.com/product/${id}/restock`, {
            method: 'PUT',
            body: JSON.stringify({ quantity: e.target.upQuantity.value }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setItem(newInventory)
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
                            <p className="card-text">Sold: {item?.sold}</p>

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
                    <div className='text-center my-5'>
                        <button className='btn btn-secondary'><Link className='text-decoration-none text-white' to='/manageInventory'>Add New Item</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleInventory;