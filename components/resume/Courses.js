import React from "react";

const Courses = () => {
  return (
    <div className="courses">
      <div className="h-card">
        <h2 className="h-card-head h-card-sec d-flex justify-content-between">
          <span>Courses</span>
          <i className="fas fa-certificate"></i>
        </h2>

        <div className="h-card-sec">
          <h3 className="heading-t-dark">
            Maximilian Schwarzmüller React , Vue & Nuxt Courses
          </h3>
          <small>+100 Hours</small>
          <p className="d-block">
            <a
              href="https://www.udemy.com/user/maximilian-schwarzmuller/"
              target="_blank"
              className="text-decoration-underline"
            >
              Udemy
            </a>
          </p>
        </div>

        <div className="h-card-sec">
          <h3 className="heading-t-dark">
            CSS , Sass & Javascript - Jonas Schmedtmann
          </h3>
          <small>30 Hours</small>
          <p className="d-block">
            <a
              href="https://www.udemy.com/course/advanced-css-and-sass"
              target="_blank"
              className="text-decoration-underline"
            >
              Udemy
            </a>
          </p>
        </div>
        <div className="h-card-sec">
          <h3 className="heading-t-dark">
            Javascript & NextJs - Brad Traversy
          </h3>
          <small>30 Hours</small>
          <p className="d-block">
            <a
              href="https://www.udemy.com/user/brad-traversy/"
              target="_blank"
              className="text-decoration-underline"
            >
              Udemy
            </a>
          </p>
        </div>

        <div className="h-card-sec">
          <h3 className="heading-t-dark">Other Courses</h3>
          <p>
            many courses from Udemy, & Youtube about : UI/UX, Web Design & Dev.
            , SEO, ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
