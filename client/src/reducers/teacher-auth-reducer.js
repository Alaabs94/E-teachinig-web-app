import {
  signinTeacher,
  signupTeacher,
  failSigninTeacher,
  failSignupTeacher,
  signoutTeacher,
  failSignoutTeacher,
  currentTeacher,
  failCurrentTeacher,
  editTeacher,
  failEditTeacher,
} from "../constants/teacher-auth-types";
let user = {};

const authTeacherReducer = (initialState = user, action) => {
  switch (action.type) {
    case signinTeacher || signupTeacher || editTeacher || currentTeacher:
      return { ...initialState, ...action.payload, auth: true };
    case failSigninTeacher ||
      failSignupTeacher ||
      failSignoutTeacher ||
      failCurrentTeacher ||
      failEditTeacher:
      return {
        ...initialState,
        ...action.payload,
        auth: false,
        errors: action.payload,
      };
    case signoutTeacher:
      return { auth: false, ...action.payload };

    default:
      return initialState;
  }
};
export default authTeacherReducer;
