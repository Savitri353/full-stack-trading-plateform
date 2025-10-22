import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>

        <div className="col-12 col-md-6 p-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo}>
              Try demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="ms-3" href={learnMore}>
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a className="me-3" href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                className="img-fluid"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
