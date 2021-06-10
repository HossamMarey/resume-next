import React from "react";

const Skills = ({ data }) => {
  return (
    <div className="skills w-100">
      <div className="h-card w-100">
        <h2 className="h-card-head h-card-sec d-flex justify-content-between">
          <span>skills</span>
          <i className="fas fa-star"></i>
        </h2>

        {data &&
          data.map((gp, i) => (
            <div className="h-card-sec skill-sec" key={i}>
              <h4 className="skill-title"> {gp.group} </h4>

              {gp.data &&
                gp.data.map((dt, ix) => (
                  <div className="skill " key={ix}>
                    <img
                      src={dt.img ? dt.img : "/images/noimg.png"}
                      alt={dt.title}
                    />
                    <span className="skill-text"> {dt.title} </span>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
