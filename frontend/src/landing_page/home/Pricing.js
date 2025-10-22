import React from 'react';

function Pricing() {
    return ( 
       <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-12 col-md-6 px-5 '>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p className=''>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a style={{textDecoration:'none'}} href=''>See pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>

              {/* <div className='col-2'></div> */}
              <div className='col-6 col-12 col-md-6 text-center px-5'>
                <div className='row'>
                    <div className='col border p-2'>
                        <h1 className='mb-5'>&#8377; 0</h1>
                        <p>Free equity delivery and <br></br> direct mutual funds</p>
                    </div>
                    <div className='col border p-2'>
                        <h1 className='mb-5'>&#8377; 20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
              </div>
        </div>
       </div>
     );
}

export default Pricing;