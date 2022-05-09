import React from 'react';

const QuesAns = () => {
    return (
        <div className='container my-5'>
            <div>
                <h2 className='text-secondary fw-bold mb-5'>Questions & Answers</h2>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>What do I do if my product is faulty when it arrives?</h4>
                <p className='text-align mb-3 text-align'>While we consider it of great importance your product arrives in first class condition, however if there is any reason that there is a fault we will arranged for it to be picked up free of charge if you inform us with 30 days. After this period of 30 days the customer is responsible to return the product to us.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>What if I receive my product and I change my mind?</h4>
                <p className='text-align mb-3 text-align'>If you change your mind within 30 days we will refund your money, however you will have to pay for return postage.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>How long does it take until I receive my product once I pay?</h4>
                <p className='text-align mb-3 text-align'>Since all products are posted by Royal mail Parcelforce, it will be despatched within one day so you should receive your product with 48 hours of despatch.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>How much do you charge for postage?</h4>
                <p className='text-align mb-3 text-align'>Postage is free for all products within the Dhaka. which we supply. Not only is it free we only use Royal Mail Parcelforce for all products.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>What forms of payment do you accept ?</h4>
                <p className='text-align mb-3 text-align'>We accept all major credit and debit cards and also accept bank transfers, although you will have to call us and arrange this with one of our staff.</p>
            </div>

            <div className='mb-5'>
                <h4 className='text-danger mb-3'>Is my credit or debit card information safe?</h4>
                <p className='text-align mb-3 text-align'>We use full 256 bit encryption with all transactions made on our site as you can see the secure lock on the address bar on our site. We also do not store or keep any credit cards on record as they are securely processed stripe.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>How long is my product guaranteed for ?</h4>
                <p className='text-align mb-3 text-align'>We operate a one year return to base warranty on all our products, however if anything happens after 30 days the customer is responsible to the product to us.</p>
            </div>
            <div className='mb-5'>
                <h4 className='text-danger mb-3'>DIDN’T FIND THE ANSWER ?</h4>
                <p className='text-align mb-5 text-align'>
                    If you do not find any answers to the questions that you require why not fill in our mail and we contact you as soon as possible, alternatively if you are a local customer please call into our shop and our of our staff will be only to happy to answer your questions direct.
                </p>
            </div>
        </div>
    );
};

export default QuesAns;