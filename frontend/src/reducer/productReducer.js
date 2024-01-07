import{PRODUCT_LIST_REQUIST , PRODUCT_LIST_SUCCESS , PRODUCT_LIST_FAIL , PRODUCT_DETAIL_REQUIST , PRODUCT_DETAIL_SUCCESS , PRODUCT_DETAIL_FAIL} from "../constant"

export const productListReducer = (state = {product : []} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case PRODUCT_LIST_REQUIST :
            return{
                loading : true
            }
            case PRODUCT_LIST_SUCCESS :
                return{
                    loading : false,
                    product : action.payload
                }
                case PRODUCT_LIST_FAIL :
                    return{
                        loading : false,
                        product : action.payload
                    }
            default :
            return state
    }
} 

export const productDetailReducer = (state = {product : []} , action) => {
    // console.log("reducer ==>" , action.payload)
    switch(action.type){
        case PRODUCT_DETAIL_REQUIST :
            return{
                loading : true
            }
            case PRODUCT_DETAIL_SUCCESS :
                return{
                    loading : false,
                    product : action.payload
                }
                case PRODUCT_DETAIL_FAIL :
                    return{
                        loading : false,
                        product : action.payload
                    }
            default :
            return state
    }
} 