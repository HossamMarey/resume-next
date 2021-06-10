import React from "react";
import ResumeSec from "../sections/Resume";

const Resume = ({ experience, skills }) => {
  return (
    <>
      <ResumeSec experience={experience} skills={skills} />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    let res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/experience");
    let experience = await res.json();

    let skillsRes = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/skills"
    );
    let skills = await skillsRes.json();

    return {
      props: { experience, skills }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error.message);
  }
}

export default Resume;
