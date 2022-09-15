import { signinUser, signupUser } from "../constants/auth-types";
import { getTeacher } from "../actions/teacher-auth-actions";
import { signinTeacher, signupTeacher } from "../constants/teacher-auth-types";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
const getCurrentUser = (store) => (next) => (action) => {
  if (
    action.type === signinTeacher ||
    action.type === signupTeacher
    // action.type === signinUser ||
    // action.type === signupUser
  ) {
    store.dispatch(getTeacher()).then((res) => {
      console.log(res);
    });
  }

  next(action);
};
export { logger, getCurrentUser };
