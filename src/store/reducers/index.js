import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import cartReducer from "./cartReducer";
// import wishListReducer from "./wishListReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,

});

export default rootReducer;
