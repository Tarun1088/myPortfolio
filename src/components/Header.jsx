import React from "react";
import forestvideo from "../video/forestvideo.mp4";

function Header() {
  return (
    <div className="middle-container">
      <div className="profile">
        <video
          id="background-video"
          className="video"
          width="100%"
          height="200px"
          loop
          autoPlay
          muted
        >
          <source src={forestvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Header;
