import axios from "axios";
const url = "http://localhost:5000";
const createUser = (data) => {
  return axios.post(`${url}/api/student/signup`, data);
};
const identifyUser = (data) => {
  return axios.post(`${url}/api/student/signin`, data);
};

const getUser = (data) => {
  return axios.get(`${url}/api/student/currentuser`);
};
const signout = (data) => {
  return axios.get(`${url}api/student/signout`);
};

const editUser = (data) => {
  return axios.put(`${url}api/student/signout`);
};
const authServices = { createUser, identifyUser, getUser, signout, editUser };
export default authServices;
