import React from "react";
import "./ArtTitle.css";

function ArtTitle(props) {
  return (
    <>
      <div className="text-center">
        <h1 className="art-title">{props.title}</h1>
      </div>
    </>
  );
}

export default ArtTitle;
