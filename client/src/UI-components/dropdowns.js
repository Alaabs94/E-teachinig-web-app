import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { getTeacher } from "../../../actions/teacher-auth-actions";get
import { getTeacher } from "../actions/teacher-auth-actions";
const Dropdowns = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const teacherAuth = useSelector((state) => state.authTeacherReducer);
  useEffect(() => {
    getcurrentTeacher();
  }, []);
  const getcurrentTeacher = () =>
    dispatch(getTeacher()).then((res) => {
      console.log(res.data);
    });
  useEffect(() => {
    console.log(teacherAuth);
  });
  return (
    <div className="btn-group">
      {auth || techerAuth ? (
        <div>
          <button
            type="button"
            className="site-btn header-btn  dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="flse"
          >
            {" "}
            Login As
          </button>
          <ul style={{ backgroundColor: "#d82a4e" }} className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/signupteacher">
                Teacher
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/signup">
                Student
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <a href="#" className="site-btn header-btn">
          logout
        </a>
      )}
    </div>
  );
};
export default Dropdowns;
