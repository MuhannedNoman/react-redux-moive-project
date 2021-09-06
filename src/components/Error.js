import React from "react";
import { Link } from "react-router-dom";
import error from "./404.svg";
// import about from "../pages/about";
// import home from "../pages/home";

function Error() {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <img style={{ width: "50vw", height: "50vh" }} src={error} alt="404" />
      <h3>Page Not Found</h3>
      <p>You might find more here</p>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
    </div>
  );
}

export default Error;
