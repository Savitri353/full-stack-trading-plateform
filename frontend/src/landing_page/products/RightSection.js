import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 order-1 order-md-0 mt-5 p-5">
          <h1 className="p-3">{productName}</h1>
          <p className="p-3">{productDescription}</p>
          <div className="p-3">
            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div></div>
        </div>

        <div className="col-md-6 order-0 order-md-1">
          <img src={imageURL} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
