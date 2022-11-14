import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="col-10 col-md-8 about-me">
      <div className="h-card d-flex">
        <h3 className="heading-t h-card-sec">About Me</h3>
        <p className="p h-card-sec">
          A Frontend Developer and a self learner who is trying to turn his
          passion into a career, <br /> I'd love to talk to you about our unique.
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
            <strong>Last Update : ..</strong> Nov. 2022
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
