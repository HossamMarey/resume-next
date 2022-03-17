import React from "react";
import ResumeSec from "../sections/Resume";

import data from '../data/index'

const Resume = () => {

  console.log(data)
  return (
    <>
      <ResumeSec experience={data.experience} skills={data.skills} />
    </>
  );
};


export default Resume;
