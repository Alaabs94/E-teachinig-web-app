import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { editAction, getUser } from "../../../../actions/auth-action";
const EditUser = () => {
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
  const [pic, setPic] = useState(initialUser.picture);
  useEffect(() => {
    getcurrentUser();
  }, []);
  const getcurrentUser = () =>
    dispatch(getUser()).then((res) => {
      setUser({ ...res.currentuser, password: "", repeatPassword: "" });
    });
  const uploadImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "uuz0hdpn");
    // axios.defaults.withCredentials = false;
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dofqvjuui/image/upload",
        formData,
        { withCredentials: false }
      )
      .then(({ data }) => {
        setPic(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(pic);
    user.picture = pic;
    console.log(user);
    if (user.password !== user.repeatPassword) {
      console.log("please repeat the password");
    }
    dispatch(editAction(user)).then((res) => {
      getcurrentUser();
    });
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
              Edit your profile
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
                  <div className="d-flex justify-content-center">
                    <div className="form-group__file">
                      <div className="file-wrapper">
                        <label
                          htmlFor="recipient-picture"
                          className="col-form-label"
                        >
                          Change your profile Photo:
                        </label>

                        <input
                          className="file-input"
                          type="file"
                          onChange={(e) => uploadImage(e)}
                          name="picture"
                        />
                        {pic ? (
                          <img
                            src={pic}
                            id="imagePreview"
                            width="200px"
                            className="file-preview"
                          />
                        ) : (
                          <img
                            src={user.picture}
                            id="imagePreview"
                            width="200px"
                            className="file-preview"
                          />
                        )}
                      </div>
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
export default EditUser;
