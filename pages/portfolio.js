import React from "react";

import Frontend from "../components/portfolio/Frontend";

import data from '../data'

const portfolio = () => {
  return <>{data.projects ? <Frontend data={data.projects} /> : <p>Loading ... </p>}</>;
};

export default portfolio;
