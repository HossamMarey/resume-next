import React from "react";

const Experience = ({ data }) => {
  return (
    <div className="experience w-100">
      <div className="h-card w-100">
        <h2 className="h-card-head h-card-sec d-flex justify-content-between">
          <span>Experience</span>
          <i className="fas fa-briefcase"></i>
        </h2>

        {data &&
          data.map((d, i) => (
            <div className="h-card-sec w-100" key={i}>
              <img src={d.img ? d.img : "/images/noimg.jpg"} alt="image" />
              <div className="info">
                <h3 className="heading-t-dark"> {d.title} </h3>
                <small> {d.date} </small>
                <p className="d-block"> {d.company} </p>
                {d.projects && (
                  <div className="exp_p"> 
                  { d.projects.map((p,ix) => (
                    <div   key={ix}> 
                      <span> {p.title}  </span> -
                      <small> {d.date} </small>
                    </div>
                   ))}
                  
                  </div>
                )}
              
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
