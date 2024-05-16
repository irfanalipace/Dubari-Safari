import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/auth.slice";
import menteesSlice from "./features/Mentees/mentees.slice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        mentees: menteesSlice,

    },
});

export default store;
