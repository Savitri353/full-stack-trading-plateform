import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center p-3 mb-5">
     
        <h1>Charges</h1>
        <p className=" text-muted fs-4 p-3"> List of all charges and taxes</p>

        <div className="row p-5">
            <div className="col-md-4 p-3">
                <img style={{width:"65%"}} src="media\images\pricing0.svg"/>
                <h2 className="p-3 fs-3">Free equity delivery</h2>
                <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>

             <div className="col-md-4 p-3">
                <img style={{width:"65%"}} src="media\images\intradayTrades.svg"/>
                 <h2 className="p-3 fs-3">Intraday and F&O trades</h2>
                 <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
             </div>
              <div className="col-md-4 p-3">
                <img style={{width:"65%"}} src="media\images\pricing0.svg"/>
                 <h2 className="p-3 fs-3">Free direct MF</h2>
                 <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              </div>
        </div>
      
    </div>
  );
}

export default Hero;
