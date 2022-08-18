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
    case signinTeacher:
    case signupTeacher:
    case editTeacher:
    case currentTeacher:
      return { ...action.payload, auth: true };
    case failSigninTeacher:
    case failSignupTeacher:
    case failSignoutTeacher:
    case failCurrentTeacher:
    case failEditTeacher:
      return {
        ...action.payload,
        auth: false,
      };
    case signoutTeacher:
      return { auth: false, ...action.payload };

    default:
      return initialState;
  }
};
export default authTeacherReducer;
