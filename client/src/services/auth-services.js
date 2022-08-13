import axios from 'axios'
const url ='http://localhost:5000'
 const createUser =(data) => {
    return axios.post(`${url}/api/student/signup`,data) 
 }
 const identifyUser =(data) => {
    return axios.post(`${url}/api/student/signin`,data) 
 }
 
 const getUser =(data) => {
    return axios.get(`${url}/api/student/currentuser` ,{withCredentials:true}) 
 }
 const signout =(data) => {
    return axios.get(`${url}api/student/signout`,{withCredentials:true})

 }
 const authServices = {createUser,identifyUser,getUser,signout}
 export default authServices