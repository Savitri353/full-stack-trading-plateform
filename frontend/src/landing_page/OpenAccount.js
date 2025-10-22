import React from "react";
import {Link} from "react-router-dom"

function OpenAccount() {
  return (
    <div className="container text-center mb-5">
      <div className="row">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
       <Link
          className="btn btn-primary fs-6 px-3 py-2 mx-auto d-block text-nowrap"
          style={{ maxWidth: "250px", width: "100%" }}
          to='/signup'
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
