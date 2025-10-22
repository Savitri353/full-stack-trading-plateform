import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center mb-5">
      <div className="row p-5">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="m-5 text-center mx-auto"
          style={{width:"50rem", textAlign:"center"}}
        />
        <h1 className="mt-5">Invest in everything</h1>

        <p className="mb-3 p-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
