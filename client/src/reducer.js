import authReducer from "./reducers/auth-reducer";
import authTeacherReducer from "./reducers/teacher-auth-reducer";
import { combineReducers } from "redux";

export default combineReducers({
  authReducer,
  authTeacherReducer,
});
