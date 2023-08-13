import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound-content">
        <h1 className="PageNotFound-title">Looking for something?</h1>
        <p className="PageNotFound-p">
          We're sorry. The Web address you entered is not a functioning page on
          our site.
        </p>
        <Link to="/" className="PageNotFound-btn">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
