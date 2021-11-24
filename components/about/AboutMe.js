import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="col-10 col-md-8 about-me">
      <div className="h-card d-flex">
        <h3 className="heading-t h-card-sec">About Me</h3>
        <p className="p h-card-sec">
          A Frontend / UI Web Developer from Egypt, Mansoura. I have a passion
          in websites building, I love to talk with you about our unique.
        </p>
        <div className="h-card-sec info">
          <p>
            <strong>Nationality : ..</strong> Egyptian
          </p>
          <p>
            <strong>DOB : ..</strong> 11/1992
          </p>
          <p>
            <strong>Address : ..</strong> Mansoura (ready to relocate)
          </p>
          <p>
            <strong>Freelance : ..</strong> Not Available
          </p>
          <p>
            <strong>Status : ..</strong> Inovola (full time)
          </p>
          <p>
            <strong>Last Update : ..</strong> 11/2021
          </p>
        </div>
        <div className="hire-me">
          <Link href="/contact">
            <a className="btn btn-secondary d-block mx-4">Hire Me</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
