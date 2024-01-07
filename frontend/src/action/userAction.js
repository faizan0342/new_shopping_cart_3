import {USER_SIGNIN_REQUIST , USER_SIGNIN_SUCCESS , USER_SIGNIN_FAIL , USER_SIGNOUT , USER_REGISTER_REQUIST , USER_REGISTER_SUCCESS , USER_REGISTER_FAIL} from "../constant"
import axios from "axios"

export const userSignIn = (email , password) => async(dispatch) => {
    dispatch({type : USER_SIGNIN_REQUIST , payload : {email , password}})

    try{

        var {data} = await axios.post("/api/signin" , {email , password})

        dispatch({type : USER_SIGNIN_SUCCESS , payload : data})

        localStorage.setItem("userInfo" , JSON.stringify(data))

    }catch(error){
        dispatch({type : USER_SIGNIN_FAIL , payload : error.message})
    }
}


export const userRegister = (name ,email , password) => async(dispatch) => {
    dispatch({type : USER_REGISTER_REQUIST , payload : {name , email , password}})

    try{

        var {data} = await axios.post("/api/register" , {name , email , password})

        dispatch({type : USER_REGISTER_SUCCESS , payload : data})

        localStorage.setItem("userInfo" , JSON.stringify(data))

    }catch(error){
        dispatch({type : USER_REGISTER_FAIL , payload : error.message})
    }
}



export const signOut = () => (dispatch) => {
   
    localStorage.removeItem("cartItem")
    localStorage.removeItem("userInfo")
    dispatch({type : USER_SIGNOUT})
}