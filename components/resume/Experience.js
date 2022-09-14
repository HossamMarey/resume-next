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
            <div key={i} className="h-card-sec flex-col w-100">
              <div className="flex" >
                <img src={d.img ? d.img : "/images/noimg.jpg"} alt="image" />
                <div className="info">
                  <h3 className="heading-t-dark"> {d.title} </h3>
                  <small style={{ 'white-space': 'pre-line' }}> {d.date} </small>
                  <p className="d-block"> {d.company} </p>
                </div>
              </div>
              {
                d.projects && (
                  <div className="exp_p  ">

                    {d.projects.map((p, ix) => (
                      <div key={ix}>

                        {p.roles && p.roles.length ? (
                          <details>
                            <summary>  {p.title} {p.skills && p.skills.length && (
                              <small>  ( {p.skills.map((sk, ix) => (<span key={ix}> {sk} {(ix + 1) !== p.skills.length && ','} </span>))}) </small>
                            )} </summary>
                            {p.description && <strong> {p.description} </strong>}
                            <div className="exp_p-roles">
                              <h2>  Roles:  </h2>
                              <ul>

                                {p.roles.map((role, ix) => (
                                  <li key={ix}> {role} </li>
                                ))}
                              </ul>
                            </div>
                          </details>

                        ) : (
                          <>
                            <span> {p.title} </span>
                            {/* skills  */}
                            {p.skills && p.skills.length && (
                              <small> - ( {p.skills.map((sk, ix) => (<span key={ix}> {sk} {(ix + 1) !== p.skills.length && ','} </span>))}) </small>
                            )}
                          </>
                        )}

                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          ))}
      </div>
    </div >
  );
};

export default Experience;
