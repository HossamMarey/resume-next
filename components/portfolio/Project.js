import React from "react";

const Project = ({ children, pro, closeProject }) => {
  return (
    <div className="project">
      <div
        className="screen d-flex justify-content-center align-items-center"
        // onClick={closeProject}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="h-card d-flex justify-content-between">
              <div className="img">
                <img
                  src={pro.image ? pro.image : "/images/noimg.png"}
                  alt={pro.title}
                />
              </div>
              <div className="pdata">
                <div className="h-card-sec w-100">
                  <p className="p-name heading-t"> {pro.title} </p>
                  {children}
                </div>
                <div className="h-card-sec w-100">
                  <p className="text-center"> {pro.description} </p>
                </div>

                <div className="tags text-center w-100">
                  {pro.tags.map((tag, ix) => (
                    <span key={ix}>{tag}</span>
                  ))}
                </div>

                {(pro.links.design || pro.links.code) && (
                  <div className="h-card-sec w-100 text-center">
                    {pro.links.code && (
                      <a href={pro.links.code} target="_blank" className="me-3">
                        <i className="fab fa-github h2"></i>
                      </a>
                    )}
                    {pro.links.design && (
                      <a
                        href={pro.links.design}
                        target="_blank"
                        className="me-3"
                      >
                        <i className="fab fa-behance h2"></i>
                      </a>
                    )}
                  </div>
                )}

                <div className="h-card-bottom p-link d-flex justify-content-center">
                  <a
                    href={pro.links.preview ? pro.links.preview : "/"}
                    target="_blank"
                  >
                    Visit this Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
