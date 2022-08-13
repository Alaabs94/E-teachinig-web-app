import { signinUser,signupUser,failSigninUser,failSignupUser } from "../constants/auth-types";



const authReducer = (initialState={},action) =>{
      switch(action.type){
      case signinUser || signupUser :
       return {...initialState, ...action.payload,auth:true} 
       case failSigninUser || failSignupUser :
                return {...initialState,...action.payload,auth:false,errors:action.payload}
                default : return initialState  
    }
}
export default authReducer