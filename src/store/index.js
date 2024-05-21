import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/auth.slice";
import menteesSlice from "./features/Mentees/mentees.slice";
import activitySlice from "./features/alActivity/activity.slice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        activity: activitySlice,

    },
});

export default store;
