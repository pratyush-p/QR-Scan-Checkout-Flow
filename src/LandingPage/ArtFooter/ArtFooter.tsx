import React from "react";
import { Link } from "react-router-dom";
import dummyText from "../dummyText";
import "./ArtFooter.css";

function ArtFooter() {
  return (
    <>
      <div className="buy-container container-fluid d-lg-none fixed-bottom">
        <Link to="/confirmation">
          <button className="btn btn-dark w-100 button-container">
            <h1 className="display-1 footer-text py-2">
              {dummyText.artBuyButton}
            </h1>
          </button>
        </Link>
      </div>
      <div className="buy-container container-fluid d-none d-lg-block">
        <Link to="/confirmation">
          <button className="btn btn-dark w-100 button-container">
            <h1 className="display-1 footer-text py-2">
              {dummyText.artBuyButton}
            </h1>
          </button>
        </Link>
      </div>
    </>
  );
}

export default ArtFooter;
