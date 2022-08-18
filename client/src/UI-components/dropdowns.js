import { useSelector } from "react-redux";
import { useEffect } from "react";

const Dropdowns = () => {
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);

  useEffect(() => {
    console.log(teacherAuth);
  });
  return (
    <div className="btn-group">
      {auth || teacherAuth ? (
        <a href="/signupteacher" className="site-btn header-btn">
          logout
        </a>
      ) : (
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
      )}
    </div>
  );
};
export default Dropdowns;
