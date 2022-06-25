import React, { useEffect, useState } from "react";
import ArtTitle from "./ArtTitle/ArtTitle";
import "./art-header-style.css";

function ArtHeaderUnderlay() {
  var [scroll, setScroll] = useState(0.0);

  window.onscroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scroll = (totalScroll / windowHeight) * 100;

    setScroll(scroll);
  };

  console.log(window.onscroll);

  return (
    <>
      <div className="container-lg bgfade">
        <div className="text-center">
          <img
            src="/exampleart.png"
            className="w-100 main-art"
            alt="Responsive image"
          />
        </div>
        <ArtTitle title="I-Ball" />
      </div>
    </>
  );
}

export default ArtHeaderUnderlay;
