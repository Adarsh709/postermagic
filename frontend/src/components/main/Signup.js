import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Copyrightfooter from "./Copyrightfooter";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
//signup function
const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      //setSubmitting(true);
      console.log(values);

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "you have successfully registered",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something went wrong",
        });
      }
    },
    // validationSchema:SignupSchema
  });

  return (
    <>
      <div className="BackgroundImage mt-5 mb-3">
        <div className="container pt-2 mb-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="card col-md-4 col-sm-3 col-xl-4 p-2 SignupCard"
              style={{ marginLeft: "55%", backgroundColor: "#F3D6DC" }}
            >
              <div
                className="card-body p-2"
                style={{ border: "2px solid black" }}
              >
                <form onSubmit={signupForm.handleSubmit}>
                  <h3 className="my-3 text-uppercase text-center">
                    Create Your Account
                  </h3>
                  <div className="row">
                    <div className="mb-2">
                      <input
                        type="text"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        Full Name
                      </label>
                    </div>
                  </div>

                  <div className="mb-2">
                    <input
                      type="email"
                      id="email"
                      value={signupForm.values.email}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example8">
                      Email
                    </label>
                  </div>

                  <div className="mb-2">
                    <input
                      type="password"
                      id="password"
                      value={signupForm.values.password}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example9">
                      Password
                    </label>
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      id="cPassword"
                      value={signupForm.values.cPassword}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example9">
                      Confirm Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger btn-md btn-block"
                  >
                    Submit
                  </button>

                  <p className="mt-2">
                    Have an account?{" "}
                    <a href="Login" className="text-dark-50 fw-bold">
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Copyrightfooter />
    </>
  );
};

export default Signup;
