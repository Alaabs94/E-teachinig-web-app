import {
  signinUser,
  signupUser,
  failSigninUser,
  failSignupUser,
  signoutUser,
  failSignoutUser,
  currentUser,
  failCurrentUser,
  editUser,
  failEditUser,
} from "../constants/auth-types";

const authReducer = (initialState = {}, action) => {
  switch (action.type) {
    case signinUser || signupUser || editUser || currentUser:
      return { ...initialState, ...action.payload, auth: true };
    case failSigninUser ||
      failSignupUser ||
      failSignoutUser ||
      failCurrentUser ||
      failEditUser:
      return {
        ...initialState,
        ...action.payload,
        auth: false,
        errors: action.payload,
      };
    case signoutUser:
      return { auth: false, ...action.payload };

    default:
      return initialState;
  }
};
export default authReducer;
