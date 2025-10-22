import React from "react";

function Team() {
  return (
    <div className="container mt-5 text-center p-3">
      <h1 className="text-muted">
        People
      </h1>
      <div className="row p-5 ">
       
        <div className="col-md-4 p-3 text-muted">
          <img
            className="p-2"
            src="media\images\nithinKamath.jpg"
            style={{ width: "80%", borderRadius: "50%" }}
          />
          <h4 className="m-2">Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>

        <div className="col-md-4 p-3 text-muted lh-lg pl-5" style={{marginLeft:"5rem"}}>
          <p className="text-start fs-6">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-start fs-6">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-start fs-6">Playing basketball is his zen.</p>
          <p className="text-start fs-6">
           
            Connect on <a href="">Homepage</a>
            /<a href="">TradingQnA </a> /
            <a href="">Twitter</a>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Team;
