import React from "react";

import Courses from "../components/resume/Courses";
import UdemyCourses from "../components/resume/UdemyCourses";
import Experience from "../components/resume/Experience";
import Langauge from "../components/resume/Langauge";
import Skills from "../components/resume/Skills";


const Resume = ({ experience, skills }) => {
  return (
    <div className="resume">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <h2 className="heading-s text-center">Resume</h2>
          </div>
        </div>

        <div className="row">
          <div className="main-grid col-12">
            <div className="lt-grid col-6">
              <Experience data={experience} />
              <Courses />
            </div>
            <div className="rt-grid col-6">
              <Skills data={skills} />
              <Langauge />
              <UdemyCourses />
            </div>
            <div className="mb-grid col-12">
              <Experience data={experience} />
              <Skills data={skills} />
              <Langauge />
              <UdemyCourses />
              <Courses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
