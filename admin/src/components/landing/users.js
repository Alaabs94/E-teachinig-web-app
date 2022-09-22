import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Users = ({ users }) => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    setUsers(users);
  }, []);
  const getUsers = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:5000/api/admin/student").then(({ data }) => {
      console.log(data);
      setUsers(data);
    });
  };
  const BlockUser = (e, userId) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/admin/student/${userId}`)
      .then(({ data }) => {
        getUsers();
        Swal.fire("Done!", data.message, "success");
      })
      .catch((err) => {});
  };
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-light text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="display-4">Recent users</h6>
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
              {user.map((el) => (
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
                        onClick={(e) => BlockUser(e, el.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={(e) => BlockUser(e, el.id)}
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
export default Users;
