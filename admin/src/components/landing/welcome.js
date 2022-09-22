import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Courses from "./courses";
import Users from "./users";
import Teachers from "./teachers";
import { useEffect, useState } from "react";
const Landing = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("USER");
  const [course, setCourse] = useState([]);
  const [users, setUsers] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getCourse();
    getUsers();
    getTeachers();
  }, []);
  const getCourse = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/course").then(({ data }) => {
      console.log(data);
      setCourse(data);
    });
  };
  const getTeachers = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/teacher").then(({ data }) => {
      console.log(data);
      setTeachers(data);
    });
  };
  const getUsers = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/student").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  };
  const logout = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/signout").then((res) => {
      navigate("/");
      console.log("helloo");
    });
  };
  const changeView = (view) => {
    const removeActive = document.getElementById(show);
    const addActive = document.getElementById(view);
    setShow(view);
    removeActive.classList.remove("active");
    addActive.classList.add("active");
  };
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      {/* <!-- Spinner Start --> */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Sidebar Start --> */}
      <ul className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2"></i>Admin
            </h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src="img/user.jpg"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <ul className="navbar-nav w-100">
            <li
              id="COURSES"
              onClick={() => changeView("COURSES")}
              href="/users"
              className="nav-item nav-link active"
            >
              <i className="fas fa-book-reader me-2"></i>courses
            </li>

            <li
              onClick={() => changeView("USER")}
              id="USER"
              href="widget.html"
              className="nav-item nav-link"
            >
              <i className="fas fa-user-graduate me-2"></i>Users
            </li>
            <li
              id="TEACHER"
              onClick={() => changeView("TEACHER")}
              href="form.html"
              className="nav-item nav-link"
            >
              <i className="fas fa-chalkboard-teacher me-2"></i>Teachers
            </li>
          </ul>
        </nav>
      </ul>

      {/* <!-- Content Start --> */}
      <div className="content">
        {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-hashtag"></i>
            </h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars"></i>
          </a>
          <form className="d-none d-md-flex ms-4">
            <input
              className="form-control border-0"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-envelope me-lg-2"></i>
                <span className="d-none d-lg-inline-flex">Message</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      // style="width: 40px; height: 40px;"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      // style="width: 40px; height: 40px;"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="img/user.jpg"
                      alt=""
                      // style="width: 40px; height: 40px;"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">
                        Jhon send you a message
                      </h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all message
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-bell me-lg-2"></i>
                <span className="d-none d-lg-inline-flex">Notificatin</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item text-center">
                  See all notifications
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  className="rounded-circle me-lg-2"
                  src="img/user.jpg"
                  alt=""
                  // style="width: 40px; height: 40px;"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" className="dropdown-item">
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <a href="/" onClick={() => logout()} className="dropdown-item">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Navbar End --> */}

        {/* <!-- Sale & Revenue Start --> */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fas fa-user-tie fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Teachers</p>
                  <h6 className="mb-0">{teachers.length}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="fas fa-user-graduate fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Total students</p>
                  <h6 className="mb-0">{users.length} </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                <i className="	fas fa-book-open fa-3x text-primary"></i>
                <div className="ms-3">
                  <p className="mb-2">Total Courses</p>
                  <h6 className="mb-0">{course.length}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Sale & Revenue End --> */}
        {show === "COURSES" && <Courses course={course} />}

        {show === "TEACHER" && <Teachers teachers={teachers} />}

        {show === "USER" && <Users users={users} />}
        {/* <!-- Recent Sales Start --> */}

        {/* <!-- Recent Sales End --> */}

        {/* <!-- Footer Start --> */}
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light rounded-top p-4">
            <div className="row">
              <div className="col-12 col-sm-6 text-center text-sm-start">
                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}
      </div>
      {/* <!-- Content End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};
export default Landing;
