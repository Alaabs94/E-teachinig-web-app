import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  axios.defaults.withCredentials = true;
  const initialUser = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();

    if (user.password === "" || user.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "empthy field",
      });
    } else {
      axios
        .post("http://localhost:5000/api/admin/signin", user)
        .then((res) => {
          Swal.fire("Good job!", "You sign in successfully", "success");
          navigate("/landing");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data[0].message,
          });
        });
    }
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          // style="min-height: 100vh;"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3>Sign In</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handelInputChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  onChange={handelInputChange}
                  name="password"
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                onClick={(e) => onSubmitForm(e)}
                type="submit"
                className="btn btn-primary py-3 w-100 mb-4"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
