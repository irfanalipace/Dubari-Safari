import { createSlice } from "@reduxjs/toolkit";
import { getActivity } from "./activity.service";

const initialState = {
    data: [],
    selectedMentee: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
};

export const ActivitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getActivity.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getActivity.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(getActivity.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
            })
    },
});

export default ActivitySlice.reducer;
