import React from "react";
import ResumeSec from "../sections/Resume";

import data from '../data/index'

const Resume = () => {

  return (
    <>
      <ResumeSec experience={data.experience} skills={data.skills} freelance={data.freelance} side={data.sideprojects} />
    </>
  );
};


export default Resume;
