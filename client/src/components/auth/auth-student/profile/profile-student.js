import react, { useState, useEffect } from "react";
import EditUser from "./edit-user";
import PersonalCourse from "./personal-course";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutAction } from "../../../../actions/auth-action";
const ProfileUser = () => {
  const [show, setShow] = useState("ALL_COURSES");

  const currentuser = useSelector((state) => state.authReducer);
  useEffect(() => {
    console.log(currentuser);
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(signoutAction()).then((res) => {
      navigate("/");
    });
  };

  const changeView = (view) => {
    setShow(view);
  };
  return (
    <section style={{ backgroundColor: "#3e3e3e" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav className="main-menu">
              <ul>
                <a
                  href="#"
                  onClick={() => logout()}
                  className="site-btn header-btn btn-pos"
                >
                  Log out
                </a>
              </ul>
            </nav>

            <a href="/" className="site-btn header-btn">
              Home
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={currentuser.picture}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">
                  {currentuser.firstname + " " + currentuser.lastname}
                </h5>
                <p className="text-muted mb-1">Student</p>
                <p className="text-muted mb-4">{currentuser.description}</p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="site-btn header-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </a>
                  <EditUser />
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li
                    onClick={() => changeView("INFORMATION")}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <i className="fa fa-user fa-lg text-warning"></i>
                    <p className="mb-0">Information</p>
                  </li>

                  <li
                    onClick={() => changeView("ALL_COURSES")}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <i
                      className="fa fa-book fa-lg"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <p className="mb-0">All your courses</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {show === "INFORMATION" && (
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {currentuser.firstname + " " + currentuser.lastname}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentuser.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {show === "ALL_COURSES" && (
            <div className="col-lg-8">
              <PersonalCourse />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default ProfileUser;
