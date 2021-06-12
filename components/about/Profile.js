import React from "react";

const Profile = () => {
  return (
    <div className="col-10 col-md-4 profile">
      <div className="h-card d-flex">
        <div className="profile-img">
          <img src="images/profile.jpg" alt="Hossam Profile Image" />
        </div>
        <h1 className="heading-p">Hossam Marey</h1>
        <div className="profile-job">
          <h3 className="job-1">Front-End Developer</h3>
          <h3 className="job-2">UI Developer</h3>
        </div>
        <div className="profile-icons">
          <a href="https://wa.me/201207721288" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/hossam-marey/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://behance.net/HossamMarey" target="_blank">
            <i className="fab fa-behance-square"></i>
          </a>
          <a href="https://github.com/HossamMarey" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          {/* <a href="https://www.bocourses.net/" target="_blank">
            <i className="fab fa-blogger"></i>
          </a> */}
          <a href="https://www.youtube.com/codv-academy" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <a
          href="pdf/HossamMareyCV.pdf"
          className="profile-download"
          target="_blank"
          download
        >
          <i className="fas fa-download"></i>
          <span>Download PDF version</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
