import React from "react";
import dummyText from "../dummyText";
import "./ArtFooter.css";

function ArtFooterUnderlay() {
  return (
    <>
      <div className="buy-container container-fluid d-lg-none">
        <button className="btn w-100 button-container">
          <h1 className="display-1 footer-text py-2">
            {dummyText.artBuyButton}
          </h1>
        </button>
      </div>
    </>
  );
}

export default ArtFooterUnderlay;
