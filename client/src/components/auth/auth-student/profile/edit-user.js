import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editAction, getUser } from "../../../../actions/auth-action";
const EditUser = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.authReducer);

  const initialUser = {
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    email: currentUser.email,
    password: "",
    repeatPassword: "",
    picture: currentUser.picture,
    descrpition: currentUser.descrpition,
  };
  const [user, setUser] = useState(initialUser);
  const getcurrentUser = () =>
    dispatch(getUser()).then((res) => {
      console.log(res.data);
    });

  useEffect(() => {
    getcurrentUser();
  }, []);

  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log("hi"); // console.log(user)
    if (user.passward !== user.repeatPassword) {
      console.log("please repeat the password");
    }
    dispatch(editAction(user)).then((res) => {
      console.log("currentUser");
    });
    getcurrentUser();
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
            <form onSubmit={(e) => onSubmitForm(e)}>
              <div className="col-md-6 mb-4">
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
                      value={user.picture} onChange={handelInputChange}{" "}
                      name="picture"
                      <input type="file" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="recipient-name"
                  value={user.firstname}
                  onChange={handelInputChange}
                  name="firstname"
                  className="col-form-label"
                >
                  Firstname:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
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
                  id="recipient-name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Password:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.password}
                  onChange={handelInputChange}
                  name="password"
                  id="recipient-name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Repeat Password:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.repeatPassword}
                  onChange={handelInputChange}
                  name="repeatPassword"
                  id="recipient-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  value={user.descrpition}
                  onChange={handelInputChange}
                  name="descrpition"
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
            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
