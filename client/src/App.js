import Signin from "./components/auth/auth-student/signin-student";
import SigninTeacher from "./components/auth/auth-teacher/signin-teacher";
import SignupTeacher from "./components/auth/auth-teacher/signup-teacher";
import ProfileTeacher from "./components/auth/auth-teacher/profile/profile-teacher";

import Signup from "./components/auth/auth-student/signup-student";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import ProfileUser from "./components/auth/auth-student/profile/profile-student";
import Footer from "./components/landing/footer";
import CardDetails from "./components/landing/cards/cards-detail";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/teacher" element={<ProfileTeacher />} />
        <Route path="/signupteacher" element={<SignupTeacher />} />
        <Route path="/signinteacher" element={<SigninTeacher />} />
        <Route path="student" element={<ProfileUser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
