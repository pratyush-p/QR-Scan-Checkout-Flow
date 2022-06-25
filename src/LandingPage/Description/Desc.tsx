import React from "react";
import DescText from "./DescText";
import "./TextStyle.css";

function Desc() {
  return (
    <>
      <div className="d-lg-none">
        <DescText />
      </div>
      <div className="d-none d-lg-block my-4">
        <DescText />
      </div>
    </>
  );
}

export default Desc;
