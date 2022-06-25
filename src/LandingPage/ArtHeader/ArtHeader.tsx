import React, { useEffect, useState } from "react";
import ArtTitle from "./ArtTitle/ArtTitle";
import "./art-header-style.css";
import ReactDOM from "react-dom/client";

function ArtHeader() {
  var [scroll, setScroll] = useState(0.0);
  var [scrollToHex, setScrollHex] = useState("#fff");

  function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  window.onscroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scroll_init = (totalScroll / windowHeight) * -100 + 100;
    var scroll_H = 42 + (scroll_init * 58) / 100;

    scroll = scroll_H;

    scrollToHex = hslToHex(0, 0, scroll);

    setScroll(scroll);
    setScrollHex(scrollToHex);
  };

  return (
    <>
      <div
        className="container-lg fixed-top"
        style={{ backgroundColor: scrollToHex }}
      >
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

export default ArtHeader;
