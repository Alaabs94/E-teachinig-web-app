import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Teachers = ({ teachers }) => {
  const [teacher, setTeachers] = useState([]);

  useEffect(() => {
    setTeachers(teachers);
  }, []);
  const getTeachers = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/teacher").then(({ data }) => {
      console.log(data);
      setTeachers(data);
    });
  };
  const BlockTeacher = (e, userId) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/admin/teacher/${userId}`)
      .then(({ data }) => {
        getTeachers();
        Swal.fire("Done!", data.message, "success");
      })
      .catch((err) => {});
  };
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <p className="display-4">Recent teachers</p>
          <a href="">Show All</a>
        </div>
        <div className="table-responsive">
          <table className="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr className="text-dark">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">firstname</th>
                <th scope="col">lastname</th>
                <th scope="col">email</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacher.map((el) => (
                <tr key={el.id}>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.email}</td>
                  <td>
                    {el.blocked === false ? (
                      <button
                        onClick={(e) => BlockTeacher(e, el.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={(e) => BlockTeacher(e, el.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Unblock
                      </button>
                    )}
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
export default Teachers;
