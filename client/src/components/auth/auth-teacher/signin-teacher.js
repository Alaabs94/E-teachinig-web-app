import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contacts from "../../../UI-components/contacts";
import { signinAction } from "../../../actions/teacher-auth-actions";
import { useNavigate } from "react-router-dom";

function SigninTeacher(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.authReducer.auth);

  const initialUser = {
    email: "",
    password: "",
  };

  useEffect(() => {
    console.log(currentUser);
  }, []);
  const [user, setUser] = useState(initialUser);
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
    dispatch(signinAction(user)).then((res) => {
      navigate("/");
      console.log("currentUser", currentUser);
    });
  };

  return (
    <section className="contact-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form-warp">
              <div className="section-title text-white text-left">
                <h2>Get in Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada lorem maximus mauris scelerisque, at rutrum nulla
                  dictum. Ut ac ligula sapien.{" "}
                </p>
              </div>
              <form onSubmit={(e) => onSubmitForm(e)} className="contact-form">
                <input
                  name="email"
                  value={user.email}
                  onChange={handelInputChange}
                  type="email"
                  placeholder="Your E-mail"
                />
                <input
                  name="password"
                  value={user.password}
                  onChange={handelInputChange}
                  type="password"
                  placeholder="Your password"
                />

                <button type="submit" className="site-btn">
                  Sign in
                </button>
              </form>
            </div>
          </div>
          {/* begin */}
          <Contacts />
          {/* end */}
        </div>
      </div>
    </section>
  );
}

export default SigninTeacher;
