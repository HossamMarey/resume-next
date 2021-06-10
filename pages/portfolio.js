import React from "react";

import Frontend from "../components/portfolio/Frontend";

const portfolio = ({ projects }) => {
  return (
    <>
      <Frontend data={projects} />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    let res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/projects");
    let projects = await res.json();

    return {
      props: { projects }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error.message);
  }
}

export default portfolio;
