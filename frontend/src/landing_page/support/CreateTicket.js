import React from "react";

function CreateTicket() {
  return (
    <div className="container p-5 text-center">
        <h2 className="text-start p-3">To create a ticket, select a relevant topic</h2>
      <div className="row text-start p-5">
        
        <div className="col-md-4 p-3">
          <p className="fs-5"><i class="fa-solid fa-circle-plus"></i> &nbsp; Account Opening</p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Resident individual
            </a>
          </p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Minor
            </a>
          </p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
            Non Resident Indian (NRI)
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Company, Partnership, HUF and LLP
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Glossary
            </a>
          </p>

        </div>

        <div className="col-md-4 p-3">
          <p className="fs-5"><i class="fa-regular fa-user"></i>&nbsp; Your Zerodha Account</p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Your Profile
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Account modification
            </a>
          </p>

          <p className="lh-sm">
            {" "}
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
          </p>

          <p className="lh-sm">
            {" "}
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Nomination
            </a>
          </p>

          <p className="lh-sm">
            {" "}
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Transfer and conversion of securities
            </a>
          </p>
          
        </div>  

        <div className="col-md-4 p-3">
          <p className="fs-5"><i class="fa-solid fa-chart-simple"></i>&nbsp; Kite</p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              IPO
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Trading FAQs
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Margin Trading Facility (MTF) and Margins
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Charts and orders
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Alerts and Nudges
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             General
            </a>
          </p>

        </div>
        <div className="col-md-4 p-3">
          <p className="fs-5"><i class="fa-solid fa-wallet"></i>&nbsp; Funds</p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Add money

            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Withdraw money
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Add bank accounts
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              eMandates
            </a>
          </p>

        </div>
        <div className="col-md-4 p-3">
          <p className="fs-5"> <i class="fa-solid fa-circle-notch"></i>&nbsp; Console</p>
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Portfolio
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Corporate actions
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Funds statement
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Reports
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Profile
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Segments
            </a>
          </p>

        </div>
        <div className="col-md-4 p-3">
          <p className="fs-5"><i class="fa-solid fa-coins"></i>&nbsp; Coin</p>
    
          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Mutual funds
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              National Pension Scheme (NPS)
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
             Features on Coin
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              Payments and Orders
            </a>
          </p>

          <p className="lh-sm">
            <a style={{fontSize:"0.9rem"}} className="fs-7" href="">
              General
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
