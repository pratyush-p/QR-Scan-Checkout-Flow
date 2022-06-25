import React, { useEffect, useState } from "react";
import ArtTitle from "./ArtTitle/ArtTitle";
import "./art-header-style.css";

function ArtHeader() {
  var [scroll, setScroll] = useState(0.0);
  var [scrollToHex, setScrollHex] = useState("#fff");

  var [scrollInv, setScrollInv] = useState(0.0);
  var [scrollToHexInv, setScrollHexInv] = useState("#fff");

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
    var scroll_eased =
      (490 / 778) * (Math.cbrt(totalScroll / windowHeight - 0.5) + 0.5);
    var scroll_init_inv = scroll_eased * 100;
    var scroll_init = (totalScroll / windowHeight) * -100 + 100;
    var scroll_H = 42 + (scroll_init * 58) / 100;

    scroll = scroll_init;
    scrollInv = scroll_init_inv;

    scrollToHex = hslToHex(0, 0, scroll);
    scrollToHexInv = hslToHex(0, 0, scrollInv);

    setScroll(scroll);
    setScrollHex(scrollToHex);
    setScrollInv(scrollInv);
    setScrollHexInv(scrollToHexInv);

    console.log(scrollToHex);
    // console.log(scrollToHexInv);
  };

  return (
    <>
      <div className="container-lg d-lg-none fixed-top bgfade">
        <div className="text-center">
          <img
            src="/exampleart.png"
            className="w-100 main-art"
            alt="Responsive image"
          />
        </div>
        <ArtTitle title="I-BALL" bgHex={scrollToHex} bgText={scrollToHexInv} />
      </div>
      <div className="container-lg d-none d-lg-block bgfade">
        <div className="text-center">
          <img
            src="/exampleart.png"
            className="w-100 main-art"
            alt="Responsive image"
          />
        </div>
        <ArtTitle title="I-BALL" bgHex={scrollToHex} bgText={scrollToHexInv} />
      </div>
    </>
  );
}

export default ArtHeader;
