import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <h2 className="heading-s text-center">Contact</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="h-card">
            <h2 className="h-card-head d-flex justify-content-between">
              <span>Contact</span>
              <i className="fas fa-paper-plane"></i>
            </h2>

            <div className="content row">
              {/* <!-- ========== --> */}
              <div className="content-data col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="info">
                  <div className="info-item d-flex">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:hosmarey@gmail.com">HosMarey@gmail.com</a>
                  </div>
                  <div className="info-item d-flex">
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:+201207721288">+2 012 077 212 88</a>
                  </div>
                  <div className="info-item d-flex">
                    <i className="fas fa-home"></i>
                    <p>Mansoura (ready to relocate)</p>
                  </div>
                </div>
              </div>
              {/* <!-- ============= --> */}
              <div className="content-form col-12 col-md-6 d-flex justify-content-center align-items-center">
                <form
                  action="https://formspree.io/hosmarey@gmail.com"
                  method="POST"
                >
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        required
                        name="fullName"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div className="row">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      required
                      name="message"
                    ></textarea>
                  </div>
                  <div className="row">
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              {/* <!-- ============== --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
