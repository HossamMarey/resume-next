import React from "react";

import AboutMe from "../components/about/AboutMe";
import Profile from "../components/about/Profile";

const About = () => {
  return (
    <div className="about ">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <Profile />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default About;
