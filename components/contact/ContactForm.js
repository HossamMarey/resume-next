import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [loading, setLoadig] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Name is Required")
      .min(3, "At least 3 characters"),
    email: Yup.string()
      .trim()
      .required("Email is Required")
      .email("Not a vaild email!"),
    message: Yup.string()
      .trim()
      .required("Message is Required")
      .min(15, "At least 15 characters")
      .max(500),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = { ...values };
      Object.entries(formData).forEach(([key, val]) => {
        if (typeof val === "string") {
          formData[key] = val.replace(/\s\s+/g, " ");
        }
      });

      setLoadig(true);
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const content = await res.json();

      if (content && content.message) {
        setSuccess(true);
        formik.resetForm();
      }
    },
  });

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
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      required
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <i className="error-message">{formik.errors.name}</i>
                    )}
                  </div>

                  <div className="row">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <i className="error-message">{formik.errors.email}</i>
                    )}
                  </div>
                  {/* <div className="row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div> */}
                  <div className="row">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Message"
                      required
                      name="message"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    ></textarea>
                    {formik.errors.message && formik.touched.message && (
                      <i className="error-message">{formik.errors.message}</i>
                    )}
                  </div>
                  <div className="row">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={loading}
                    >
                      Send
                    </button>
                    {success && (
                      <p className="success-message text-center mt-3">
                        Message has been sent successfully{" "}
                      </p>
                    )}
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

export default ContactForm;
