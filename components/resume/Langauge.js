import React from "react";

const Langauge = () => {
  return (
    <div className="langauge  w-100">
      <div className="h-card w-100">
        <h2 className="h-card-head h-card-sec d-flex justify-content-between">
          <span>Langauge</span>
          <i className="fas fa-globe"></i>
        </h2>

        <div className="h-card-sec d-flex w-100">
          <div className="flag">
            <img src="/images/svg/egypt.svg" alt="langauge icon" />
          </div>
          <div className="lang ms-4">
            <h3 className="heading-t-dark">Arabic</h3>
            <p>Mother Langauge</p>
          </div>
        </div>

        <div className="h-card-sec d-flex w-100">
          <div className="flag">
            <img src="images/svg/usa.svg" alt="langauge icon" />
          </div>
          <div className="lang ms-4">
            <h3 className="heading-t-dark">English</h3>
            <p>Very Good</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Langauge;
