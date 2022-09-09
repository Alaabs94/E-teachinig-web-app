import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  editAction,
  getTeacher,
} from "../../../../actions/teacher-auth-actions";
const EditTeacher = () => {
  const dispatch = useDispatch();

  const initialUser = {
    firstname: "",
    lastname: "",

    password: "",
    repeatPassword: "",
    picture: "",
    description: "",
  };
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    getcurrentTeacher();
  }, []);
  const getcurrentTeacher = () =>
    dispatch(getTeacher()).then((res) => {
      setUser({ ...res.currentuser, password: "", repeatPassword: "" });
    });

  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(user);
    if (user.password !== user.repeatPassword) {
      console.log("please repeat the password");
    }
    dispatch(editAction(user)).then((res) => {
      setUser({ ...res.data, password: "", repeatPassword: "" });
    });
    console.log("userAuth", user);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              New message
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="contact-form">
                <div className="file-field">
                  <div className="mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                      className="rounded-circle z-depth-1-half avatar-pic"
                      alt="example placeholder avatar"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-mdb-color btn-rounded float-left">
                      <span>Add photo</span>

                      <input
                        type="file"
                        value={user.picture}
                        onChange={handelInputChange}
                        name="picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Firstname:
                </label>
                <input
                  value={user.firstname}
                  onChange={handelInputChange}
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="recipient-firstname"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Lastname:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.lastname}
                  onChange={handelInputChange}
                  name="lastname"
                  id="recipient-lastname"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={user.password}
                  onChange={handelInputChange}
                  name="password"
                  id="recipient-password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Repeat Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={user.repeatPassword}
                  onChange={handelInputChange}
                  name="repeatPassword"
                  id="recipient-rp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  value={user.description}
                  onChange={handelInputChange}
                  name="description"
                  id="message-text"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => onSubmitForm(e)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTeacher;
