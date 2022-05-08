import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='text-center my-5'>
                <h2 className='text-secondary'>Blogs</h2>
            </div>
            <div className='shadow p-3 my-5'>
                <h2>Difference between javascript and node js?</h2>
                <p>Javascript is a Scripting language which allows the javascript code to be run on the server-side.Js has no modules.Used on the client-side.Also used in frontend development.It is written in c++.javascript frameworks are RamdaJS, TypedJS, etc.</p>
                <p>On the other hand,node js is a cross-platform and open source language which allows Javascript code to run outside the browser.Mostly used on the server-side.Also used in server-side development. It is Written in C and  C++.Nodejs modules are Lodash, express etc.
                </p>
            </div>
            <div className='shadow p-3 my-5'>
                <h2>Differences between sql and nosql databases?</h2>
                <p>
                    Mysql is Free and open-source.Extremely established database with a huge community, extensive testing, and lots of stability.Available for all major platforms.Replication and sharding are available.Covers a wide range of use cases.
                </p>
                <p>
                    Ont the other hand, Nosql is Free to use.It has Dynamic schema.NoSQL databases are horizontally scalable.Excellent performance with simple queries.Add new columns and fields without impacting your existing rows or the application’s performance
                </p>
            </div>
            <div className='shadow p-3 my-5'>
                <h2>What is the purpose of jwt and how does it work?</h2>
                <p>wt or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
        </div>
    );
};

export default Blogs;