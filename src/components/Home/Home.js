
import img from '../../images/pngegg (1).png'
import Products from '../Products/Products';

import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='d-md-flex container justify-content-evenly align-items-center'>

                <div className='p-5 '>
                    <p className=' w-100 text-dark text-align fs-4'>In today’s date, laptops are a necessity. While the design of laptop devices has evolved constantly over the past decades,We are dealing with the top laptop brands such as HP, Dell, Acer, Apple, chuwi, Gigabyte, and Lenovo. Our suppliers supply the original and fresh products which is directly imported from abroad. </p>
                </div>
                <div className='p-5 '>
                    <img className='w-100' src={img} alt="" />
                </div>
            </div>
            <Products></Products>


        </div>
    );
};

export default Home;