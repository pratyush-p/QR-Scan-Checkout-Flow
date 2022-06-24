import React from "react";
import "./art-header-style.css";

function ArtHeader() {
  return (
    <>
      <div className="text-center">
        <img
          src="/exampleart.png"
          className="w-100 main-art"
          alt="Responsive image"
        />
      </div>
    </>
  );
}

export default ArtHeader;
