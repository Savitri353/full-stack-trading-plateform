import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center mt-3 border-bottom p-5'>
            <h1 className='p-3 fs-1'>Zerodha Products</h1>
            <h5 className='fs-5 p-2 text-muted'>Sleek, modern, and intuitive trading platforms</h5>
            <p className='p-2' style={{fontSize:"1.1rem"}}>Check out our <a style={{textDecoration:'none'}} href=''>investment offerings <i className="fa-solid fa-arrow-right"></i></a></p>
        </div>
     );
}

export default Hero;