import { signinUser,signupUser,failSigninUser,failSignupUser } from "../constants/auth-types";
import authServices from "../services/auth-services";

export const signupAction =(data) => async (dispatch) => {
    try {
        const res = await authServices.createUser(data)
        dispatch({
            type : signupUser,
            payload : res.data,

        })
        return Promise.resolve(res.data);
        
    } 
    catch (error) {
        dispatch({
            type : failSignupUser,
            payload : error.response.data,
        })
        return Promise.reject(error);

    }

}
export const signinAction =(data) => async (dispatch) => {
    try {
        const res = await authServices.identifyUser(data)
        dispatch({
            type: signinUser,
            payload :res.data,
        })
        return Promise.resolve(res.data);
    } catch (error) {
        dispatch({
            type:failSigninUser , 
            payload : error.response.data,
        })
        return Promise.reject(error);
        
    }
}