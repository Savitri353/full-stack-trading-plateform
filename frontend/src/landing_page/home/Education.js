import React from 'react';

function Education() {
    return (
         <div className='container p-5'>
            <div className='row'>

                <div className='col-12 col-md-6 p-5'>
                    <img src='media\images\education.svg' className="img-fluid"/>
                </div>

                <div className='col-12 col-md-6 p-5 mt-5'>
                    <h1 className='fs-2 mt-5'>Free and open market education</h1>
                    <p className='text-muted mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration:'none'}} href=''>Varsity  <i className="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a style={{textDecoration:'none'}} href=''>TradingQ&A   <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
      );
}

export default Education;