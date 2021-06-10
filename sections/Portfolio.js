import React from "react";

const Portfolio = () => {
  return (
    <div className="front-end">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <h2 className="heading-s text-center">Recent Works</h2>
          </div>
        </div>
        {/* <!-- /// filter //// --> */}
        <div className="row d-flex justify-content-center mb-4">
          {/* <!-- filter btns ///////  --> */}
          <button
            className="btn btn-primary"
            // v-for="(btn, i) in btnTags"
            // :key="i"
            // :className="{ 'btn-active': btn.active }"
            // @click="filterTags(btn)"
          >
            {/* {{ btn.name }} */}
          </button>
        </div>
        {/* <!-- /////// portfolio ///////// --> */}

        <div className="row d-flex justify-content-center mt-4">
          {/* <!-- ///////////// looooooo projects  /////////// --> */}

          <div
            className="col-12 col-md-6 col-lg-3 porto-item"
            // v-for="(pro, i) in projects"
            // :key="i"
          >
            <div className="h-card">
              <div
                className="img"
                //  @click="viewProject(i)"
              >
                <img
                  // :src="require(`@/assets/img/${pro.imgName}`)"
                  src="/"
                  alt="project description"
                />
                <div className="btn">View Project</div>
              </div>
              <div className="h-card-bottom">
                <h3 className="heading-t text-center">
                  {/* {{ pro.name }} */}
                </h3>
              </div>
            </div>

            {/* <!-- ////// project view /////// --> */}
            <project
              v-if="opened"
              // :proIndex="proIndex" @cView="cView"
            >
              <span
                className="p-delete"
                // @click="closeProject"
              >
                X
              </span>
            </project>
            {/* <!-- ////// project view /////// --> */}
          </div>
          {/* <!-- ////// loooooop//////  --> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
