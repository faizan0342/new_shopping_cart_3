import {USER_SIGNIN_REQUIST , USER_SIGNIN_SUCCESS , USER_SIGNIN_FAIL , USER_SIGNOUT , USER_REGISTER_REQUIST , USER_REGISTER_SUCCESS , USER_REGISTER_FAIL} from "../constant"

export const userSignReducer = (state = {userInfo : []} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case USER_SIGNIN_REQUIST :
            return{
                loading : true
            }
            case USER_SIGNIN_SUCCESS :
                return{
                    loading : false,
                    product : action.payload
                }
                case USER_SIGNIN_FAIL :
                    return{
                        loading : false,
                        product : action.payload
                    }
            default :
            return state
    }
} 



export const userRegisterReducer = (state = {userInfo : []} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case USER_REGISTER_REQUIST :
            return{
                loading : true
            }
            case USER_REGISTER_SUCCESS :
                return{
                    loading : false,
                    product : action.payload
                }
                case USER_REGISTER_FAIL :
                    return{
                        loading : false,
                        product : action.payload
                    }
            default :
            return state
    }
} 