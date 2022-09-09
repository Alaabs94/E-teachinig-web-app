import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../../actions/course-action";
import axios from "axios";

const AddCourse = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.authTeacherReducer.id);
  const initialCourse = {
    name: "",
    teacher: id,
    description: "",
    field: "",
    picture: "",
  };
  const [course, setCourse] = useState(initialCourse);
  const [pic, setPic] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );

  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", pic);
    formData.append("upload_preset", "uuz0hdpn");
    // axios.defaults.withCredentials = false;
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dofqvjuui/image/upload",
        formData,
        { withCredentials: false }
      )
      .then(({ data }) => {
        console.log(data.url);
        setPic(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    course.picture = pic;
    console.log("course", course);
    dispatch(createAction(course)).then((res) => {
      setCourse(initialCourse);
    });
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <div className="col-md-6 mb-4">
              <div className="file-field">
                <div className="mb-4">
                  <img
                    src={pic}
                    className="rounded-circle z-depth-1-half avatar-pic"
                    alt="example placeholder avatar"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="btn btn-mdb-color btn-rounded float-left">
                    <span>Add photo</span>

                    <input
                      type="file"
                      //   value={pic}
                      onChange={(event) => setPic(event.target.files[0])}
                      name="picture"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => uploadImage(e)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                Name:
              </label>
              <input
                value={course.name}
                onChange={handelInputChange}
                name="name"
                type="text"
                className="form-control"
                id="recipient-name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                Field:
              </label>
              <input
                type="text"
                className="form-control"
                value={course.field}
                onChange={handelInputChange}
                name="field"
                id="recipient-field"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                value={course.description}
                onChange={handelInputChange}
                name="description"
                id="message-text"
              ></textarea>
            </div>
            {/* <div className="mb-3">
              <label for="formFileMultiple" className="form-label">
                Multiple files input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                onChange={handleFileChangeVideo}
                accept=".mov,.mp4"
              />
            </div> */}
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
  );
};
export default AddCourse;
