import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-3 border-bottom">
      <h3 className=" fs-4 text-muted" style={{ marginBottom: "5rem" }}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </h3>
      <h1 className="p-3 fs-1">The Zerodha Universe</h1>
      <h5 className="fs-5 p-2 text-muted mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </h5>
      
      <div className="row">
        <div className="col-md-4 mt-3">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-muted p-3">Thematic investment plateform</p>
        </div>
        <div className="col-md-4 mt-3">
          <img style={{ width: "40%" }} src="media\images\streakLogo.png" />
          <p className="text-muted p-3">Algo & strategy plateform</p>
        </div>
        <div className="col-md-4 mt-3">
          <img style={{ width: "50%" }} src="media\images\sensibullLogo.svg" />
          <p className="text-muted p-3">Options trading plateform</p>
        </div>
        <div className="col-md-4 mt-3">
          <img
            style={{ width: "50%" }}
            src="media\images\zerodhaFundhouse.png"
          />
          <p className="text-muted p-3">Asset management</p>
        </div>
        <div className="col-md-4 mt-3">
          <img style={{ width: "50%" }} src="media\images\goldenpiLogo.png" />
          <p className="text-muted p-3">Bonds trading plateform</p>
        </div>
        <div className="col-md-4 mt-3">
          <img style={{ width: "30%" }} src="media\images\dittoLogo.png" />
          <p className="text-muted p-3">insurance</p>
        </div>
     
      </div>
        <button className="btn btn-primary p-2 m-3 mb-5 " style={{width:"15%"}}>Sign up now</button>
    </div>
  );
}

export default Universe;
