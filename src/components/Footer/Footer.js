import React from 'react';
import app from '../../images/App Store Badgeapple.png'
import playStore from '../../images/Google Play Badge.png'

const Footer = () => {
    return (
        <footer className="container-fluid  bg-dark py-5 ">
            <div className="container">

                <div className="row d-flex align-items-center text-lg-start text-center ">
                    <div className="col-lg-10 col-md-6 col-sm-12">

                        <p className="text-white "><small>
                            © Laptop WareHouse Ltd. All rights reserved
                        </small></p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="row text-lg-start text-center">
                            <div className="col-lg-12 col-md-12 mb-3">
                                <h5 className="text-white">Get The App</h5>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">

                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><img src={app} alt="" /></a>

                            </div>
                            <div className="col-lg-12 col-sm-12 col-md-12">
                                <a href="https://playstore.com/" target="_blank" rel="noopener noreferrer"><img src={playStore} alt="" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </footer>
    );
};

export default Footer;