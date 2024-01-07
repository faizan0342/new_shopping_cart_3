import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {thunk} from 'redux-thunk';
import {productListReducer , productDetailReducer} from "./reducer/productReducer"
import {cartItemReducer } from "./reducer/cartItemReducer"
import { userSignReducer , userRegisterReducer} from "./reducer/userReducer"
import {userShippingReducer} from "./reducer/shippingAddressReducer"

// Correct the function name here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var cartItem = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];

// var empty =  || undefined

var userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];

var shipping = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem("shipping")) : [];

const initialState = {
    cart : {cartItem},
    userInfo : {userInfo},
    shipping : {shipping}
};

const store = createStore(
    combineReducers({
        productList : productListReducer,
        productDetail : productDetailReducer,
        cart : cartItemReducer,
        userInfo : userSignReducer,
        register : userRegisterReducer,
        shipping : userShippingReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    const updatedCart = store.getState().cart.cartItem;
    localStorage.setItem('cartItem', JSON.stringify(updatedCart));
  });

export default store;