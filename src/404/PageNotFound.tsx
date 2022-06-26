import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="text-center mt-4">
        <h1 className="display-1">404</h1>
        <h1 className="display-2">Couldn't find a page here.</h1>
        <img
          src="/thumbsuphead.png"
          className="img-fluid mt-4"
          alt="hamburder 4: the resurrection"
        ></img>
        <br></br>
        <Link to="/">
          <button
            className="btn bg-primary text-white btn-lg mt-4 mx-3"
            style={{ borderRadius: "30px", boxShadow: "0px 10px 2px navy" }}
          >
            <h1 className="display-3 p-4">Home</h1>
          </button>
        </Link>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <button
            className="btn bg-primary text-white btn-lg mt-4 mx-3"
            style={{ borderRadius: "30px", boxShadow: "0px 10px 2px navy" }}
          >
            <h1 className="display-3 p-4">Somewhere else :|</h1>
          </button>
        </a>
      </div>
    </>
  );
}

export default PageNotFound;
