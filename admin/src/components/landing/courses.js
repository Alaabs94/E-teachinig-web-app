import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Courses = ({ course }) => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    setCourse(course);
  }, []);
  const getCourse = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/course").then(({ data }) => {
      console.log(data);
      setCourse(data);
    });
  };
  const onDeleteCourse = (e, courseId) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .delete(`http://localhost:5000/api/admin/course/${courseId}`)
      .then(({ data }) => {
        console.log();
        getCourse();
        Swal.fire("Done!", data.message, "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data[0].message,
        });
      });
  };

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="display-4">Recent courses</h6>
        </div>
        <div className="table-responsive">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">Course</th>
                <th scope="col">Field</th>
                <th scope="col">Teacher</th>
                <th scope="col">Students</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((el) => (
                <tr key={el.id}>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>

                  <td>{el.name}</td>
                  <td>{el.field}</td>
                  <td>{el.teacher.firstname + " " + el.teacher.lastname} </td>
                  <td>{el.users.length}</td>

                  <td>
                    <button
                      onClick={(e) => onDeleteCourse(e, el.id)}
                      className="btn btn-sm btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Courses;
