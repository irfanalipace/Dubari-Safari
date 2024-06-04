import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import cartReducer from "./cartReducer";
import activitiesReducer from "./activitiesReducer";
// import wishListReducer from "./wishListReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  popularActivities: activitiesReducer,

});

export default rootReducer;
