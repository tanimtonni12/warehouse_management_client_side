
import img from '../../images/pngegg (1).png'
import hp from '../../images/hp (1).png'
import lenovo from '../../images/lenovo (1).png'
import mac from '../../images/mac (1).png'
import dell from '../../images/dell (2).png'
import asus from '../../images/asus (1).png'
import acer from '../../images/acer (2).png'
import Products from '../Products/Products';
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='container'>
            <div className='d-md-flex  justify-content-evenly align-items-center'>

                <div className='p-5 '>
                    <p className=' w-100 text-dark text-align fs-4'>In today’s date, laptops are a necessity. While the design of laptop devices has evolved constantly over the past decades,We are dealing with the top laptop brands such as HP, Dell, Acer, Apple, chuwi, Gigabyte, and Lenovo. Our suppliers supply the original and fresh products which is directly imported from abroad. </p>
                </div>
                <div className='p-5 '>
                    <img className='w-100' src={img} alt="" />
                </div>
            </div>
            <Products></Products>

            <div>
                <div className='text-center my-5'>
                    <h2 className='text-secondary fs-1 fw-bold'>Our Best Sellers</h2>
                </div>
                <div className='d-md-flex  align-items-center justify-content-between'>
                    <img src={hp} alt="" />
                    <img src={lenovo} alt="" />
                    <img src={mac} alt="" />
                    <img src={asus} alt="" />
                    <img src={dell} alt="" />
                    <img src={acer} alt="" />
                </div>

            </div>

            <div>
                <div className='text-center my-5'>
                    <h2 className='text-secondary fs-1 fw-bold'>Delivery</h2>
                </div>
                <div className='my-5 fs-4'>
                    <p>As all our deliveries are exclusively handled, we try to dispatch our products within 1 day with a 48hr delivery timescale. All tracking id will sent by emailed.</p>
                    <p>Our products should arrive in perfect condition. Any problems please do not hesitate to contact us either through our contact page, by email or directly by phone.</p>
                    <p>Please check our <Link to='/returnPolicy' className='text-decoration-none'>Returns Policy</Link> for returning goods.</p>
                </div>

            </div>


        </div>
    );
};

export default Home;