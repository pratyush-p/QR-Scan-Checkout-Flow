import React from "react";
import ArtFooter from "./ArtFooter/ArtFooter";
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
    </>
  );
}

export default LandingPage;
