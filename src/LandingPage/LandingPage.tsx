import React from "react";
import ArtHeader from "./ArtHeader/ArtHeader";
import ArtHeaderUnderlay from "./ArtHeader/ArtHeaderUnderlay";
import Desc from "./Description/Desc";
import "./LandingPageStyle.css";

function LandingPage(): JSX.Element {
  return (
    <>
      <ArtHeader />
      <ArtHeaderUnderlay />
      <div className="container-lg">
        <Desc />
      </div>
    </>
  );
}

export default LandingPage;
