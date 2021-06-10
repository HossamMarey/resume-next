import { useState } from "react";
import Project from "./Project";

const Frontend = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  const viewProject = (pro) => {
    setActiveProject(pro);
    setModal(true);
  };
  const closeProject = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  return (
    <div className="front-end">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <h2 className="heading-s text-center">Recent Works</h2>
          </div>
        </div>
        {/* <!-- /// filter //// --> */}
        {/* <div className="row d-flex justify-content-center mb-4 filter-btns">
       
          <button className="btn btn-primary btn-active">All</button>
          <button className="btn btn-primary">Native Js</button>
          <button className="btn btn-primary">jQuery</button>
          <button className="btn btn-primary">Vue</button>
          <button className="btn btn-primary">React</button>
        </div> */}
        {/* <!-- /////// portfolio ///////// --> */}

        <div className="row d-flex justify-content-center mt-4">
          {/* <!-- ///////////// looooooo projects  /////////// --> */}

          {data &&
            data.map((pro, i) => (
              <div className="col-12 col-md-6 col-lg-3 porto-item" key={i}>
                <div className="h-card">
                  <div
                    className="img"
                    //  @click="viewProject(i)"
                    onClick={() => viewProject(pro)}
                  >
                    <img
                      // :src="require(`@/assets/img/${pro.imgName}`)"
                      src={pro.image ? pro.image : "/images/noimg.jpg"}
                      alt={pro.title}
                    />
                    <div className="btn">
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                  <div className="h-card-bottom d-block py-3">
                    <h3 className="heading-t text-center  "> {pro.title} </h3>
                  </div>
                </div>

                {modal && (
                  <Project pro={activeProject} closeProject={closeProject}>
                    <span className="p-delete" onClick={closeProject}>
                      <i className="fas fa-times"></i>
                    </span>
                  </Project>
                )}

                {/* <!-- ////// project view /////// --> */}
                {/* <project v-if="opened" :proIndex="proIndex" @cView="cView">
             
            </project> */}
                {/* <!-- ////// project view /////// --> */}
              </div>
            ))}
          {/* <!-- ////// loooooop//////  --> */}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
