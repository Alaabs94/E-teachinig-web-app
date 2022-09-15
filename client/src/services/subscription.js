import axios from "axios";
const url = "http://localhost:5000";
axios.defaults.withCredentials = true;
const subscribed = (course, userId) => {
  return axios.post(`${url}/api/course/add/${course}`, userId);
};
const unSubscribed = (course, userId) => {
  return axios.post(`${url}/api/course/remove/${course}`, userId);
};
const getStatus = (course, userId) => {
  return axios.get(`${url}/api/course/remove/${course}`, userId);
};
const subscriptionService = { subscribed, unSubscribed, getStatus };
export default subscriptionService;
