import React from "react";
import ArtFooter from "./ArtFooter/ArtFooter";
import ArtFooterUnderlay from "./ArtFooter/ArtFooterUnderlay";
import ArtHeader from "./ArtHeader/ArtHeader";
import ArtHeaderUnderlay from "./ArtHeader/ArtHeaderUnderlay";
import Desc from "./Description/Desc";
import "./LandingPageStyle.css";

function LandingPage(): JSX.Element {
  return (
    <>
      <ArtHeader />
      <div id="desc">
        <ArtHeaderUnderlay />
        <div className="container-lg">
          <Desc />
        </div>
      </div>
      <ArtFooter />
      <ArtFooterUnderlay />
    </>
  );
}

export default LandingPage;
