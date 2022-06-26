import React from "react";
import "./ArtFooter.css";

function ArtFooterUnderlay() {
  return (
    <>
      <div className="buy-container container-fluid d-lg-none">
        <button className="btn btn-dark w-100 button-container">
          <h1 className="display-1 footer-text py-2">Buy Now.</h1>
        </button>
      </div>
    </>
  );
}

export default ArtFooterUnderlay;
