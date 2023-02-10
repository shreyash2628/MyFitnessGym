import React from "react";
import squats from "../assets/video/squats.mp4";

function LandingPage() {
  return (
    <div>
      <div className="h-fit w-screen ">
        <video className="h-screen w-screen " autoplay muted>
          <source src={squats} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LandingPage;
