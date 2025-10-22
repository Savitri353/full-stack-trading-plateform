import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-3" id="supportHero">
      <div className="pt-4 text-center" id="supportWrapper">
        <a className="fs-4 d-block mb-2" style={{ color: "#fff", textDecoration: "none" }} href="">
          Support Portal
        </a>
        <a className="fs-5 d-block" style={{ color: "#fff", textDecoration: "none" }} href="">
          Track ticket
        </a>
      </div>

      <div className="row p-3 p-md-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3">
          <p className="fs-4 text-center text-md-start mb-3">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input
            className="p-3 w-100"
            style={{
              borderRadius: "0.5rem",
              fontSize: "1rem",
              border: "none",
            }}
            placeholder="How do I activate F&O, why is my order getting rejected ..."
          />
          <div className="my-4 text-center text-md-start">
            <a href="">Track account opening</a>
            <a className="mx-3" href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <div className="mt-2">
              <a href="">Kite user manual</a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3">
          <p className="fs-5">Featured</p>
          <p>
            <a className="d-block mb-2" href="">1. Surveillance measure on scrips - June 2025</a>
            <a className="d-block" href="">2. Latest Intraday leverages and Square-off timings</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
