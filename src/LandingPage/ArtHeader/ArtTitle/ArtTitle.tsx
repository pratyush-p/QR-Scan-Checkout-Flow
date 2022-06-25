import React from "react";
import "./ArtTitle.css";

function ArtTitle(props) {
  return (
    <>
      <a href="#desc">
        <div
          className="text-center title-container"
          style={{ backgroundColor: props.bgHex }}
        >
          <h1 className="art-title" style={{ color: props.bgText }}>
            {props.title}
          </h1>
        </div>
      </a>
    </>
  );
}

export default ArtTitle;
