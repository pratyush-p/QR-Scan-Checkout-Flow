import React from "react";
import dummyText from "../dummyText";
import "./ArtFooter.css";

function ArtFooter() {
  return (
    <>
      <div className="buy-container container-fluid d-lg-none fixed-bottom">
        <button className="btn btn-dark w-100 button-container">
          <h1 className="display-1 footer-text py-2">
            {dummyText.artBuyButton}
          </h1>
        </button>
      </div>
      <div className="buy-container container-fluid d-none d-lg-block">
        <button className="btn btn-dark w-100 button-container">
          <h1 className="display-1 footer-text py-2">
            {dummyText.artBuyButton}
          </h1>
        </button>
      </div>
    </>
  );
}

export default ArtFooter;
