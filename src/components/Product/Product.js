
import React from 'react';
import icon from '../../images/taka.png'

import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity } = product;


    return (

        <div className="col">
            <div className="card h-100 text-start">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title d-flex align-items-center"><span className='me-2'>Price:</span> <img className='me-2' src={icon} alt="" /> {price}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">Quantity: {quantity}</p>
                </div>
                <div className='text-center mb-2'>
                    <button className='btn btn-secondary'>   <Link className='text-decoration-none text-white text-center fw-bold' to={`/inventory/${_id}`}>Stock Update</Link></button>
                </div>
            </div>
        </div>



    );
};

export default Product;