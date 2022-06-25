import React from "react";
import "./ArtFooter.css";

function ArtFooterUnderlay() {
  return (
    <>
      <div className="buy-container container-fluid d-lg-none">
        <div className="row">
          <div className="col-12">
            <button className="btn btn-dark btn-lg btn-block w-100 button-container">
              <h1 className="display-1 footer-text">Buy Now.</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtFooterUnderlay;
