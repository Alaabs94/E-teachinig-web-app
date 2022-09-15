import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contacts from "../../../UI-components/contacts";
import { signupAction } from "../../../actions/auth-action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.authReducer);

  const initialUser = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialUser);
  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    console.log(currentUser);
  }, []);
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (user.password !== user.repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your repeated password and password should be the same",
      });
    } else if (
      user.password === "" ||
      user.password === "" ||
      user.email === "" ||
      user.lastname === "" ||
      user.firstname === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "empthy field",
      });
    } else {
      dispatch(signupAction(user))
        .then((res) => {
          Swal.fire("Good job!", "You clicked the button!", "success");
          navigate("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data[0].message,
          });
        });
    }
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
                  name="firstname"
                  value={user.firstname}
                  onChange={handelInputChange}
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  name="lastname"
                  value={user.lastname}
                  onChange={handelInputChange}
                  type="text"
                  placeholder="Your last name"
                />
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
                <input
                  name="repeatPassword"
                  value={user.repeatPassword}
                  onChange={handelInputChange}
                  type="password"
                  placeholder="Confirm password"
                />

                <button type="submit" className="site-btn">
                  Sign up
                </button>
                <div>
                  <p>
                    If you have an account{" "}
                    <a className="main-menu-link" href="/signin">
                      Sign in
                    </a>
                  </p>
                </div>
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

export default Signup;
