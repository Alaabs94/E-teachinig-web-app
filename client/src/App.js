import Signin from "./components/auth/auth-student/signin-student";
import Signup from "./components/auth/auth-student/signup-student";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import ProfileUser from "./components/auth/auth-student/profile/profile-student";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="student" element={<ProfileUser />} />
        <Route path="*" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
