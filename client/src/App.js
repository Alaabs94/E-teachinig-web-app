import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./components/auth/auth-student/signin-student";
import SigninTeacher from "./components/auth/auth-teacher/signin-teacher";
import SignupTeacher from "./components/auth/auth-teacher/signup-teacher";
import ProfileTeacher from "./components/auth/auth-teacher/profile/profile-teacher";
import { getTeacher } from "./actions/teacher-auth-actions";
import { getUser } from "./actions/auth-action";
import Signup from "./components/auth/auth-student/signup-student";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import ProfileUser from "./components/auth/auth-student/profile/profile-student";
import Footer from "./components/landing/footer";
import CardDetails from "./components/landing/cards/cards-detail";
import "./style.css";
function App() {
  const [authTeacher, setAuthTeacher] = useState({});
  const [authUser, setAuthUser] = useState();

  const dispatch = useDispatch();

  const getcurrentTeacher = () => {
    dispatch(getTeacher()).then((res) => {
      setAuthTeacher(res.currentUser);
    });
  };
  const getcurrentUser = () => {
    dispatch(getUser()).then((res) => {
      setAuthUser(res.currentUser);
    });
  };
  useEffect(() => {
    getcurrentTeacher();
    getcurrentUser();
  }, []);
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  const typeUser = useSelector((state) => state.authReducer.type);
  const typeTeacher = useSelector((state) => state.authTeacherReducer.type);
  useEffect(() => {
    console.log("typeUser", typeUser);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/teacher" element={<ProfileTeacher />} />
        <Route path="/signupteacher" element={<SignupTeacher />} />
        <Route path="/signinteacher" element={<SigninTeacher />} />
        <Route path="/student" element={<ProfileUser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
