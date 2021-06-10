import React from "react";

const UdemyCourses = () => {
  return (
    <div className="courses">
      <div className="h-card">
        <h2 className="h-card-head h-card-sec d-flex justify-content-between">
          <span>My Udemy Courses</span>
          <i className="fas fa-chalkboard-teacher"></i>
        </h2>

        <div className="h-card-sec">
          <h3 className="heading-t-dark">
            Modern HTML & CSS من الصفر الى الاحتراف
          </h3>
          <small>+3000 students </small>
          <p className="d-block">
            <a
              href="https://www.udemy.com/course/arabic-html-css/"
              target="_blank"
              className="text-decoration-underline"
            >
              Show Course on Udemy
            </a>
          </p>
        </div>

        <div className="h-card-sec">
          <h3 className="heading-t-dark">
            CReact.js بالعربى ( React , Redux , Hooks, Router .. )
          </h3>
          <small>+3000 students </small>
          <p className="d-block">
            <a
              href="https://www.udemy.com/course/react-arabic/"
              target="_blank"
              className="text-decoration-underline"
            >
              Show Course on Udemy
            </a>
          </p>
        </div>
        <div className="h-card-sec">
          <h4 className=" ">I have plans to make more HQ courses .</h4>
        </div>
      </div>
    </div>
  );
};

export default UdemyCourses;
