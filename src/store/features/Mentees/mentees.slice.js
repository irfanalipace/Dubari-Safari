import { createSlice } from "@reduxjs/toolkit";
import { getMentees, getSingleMentees, updateMentee } from "./mentess.service";
// import { getMentees } from "./mentess.service";

const initialState = {
    data: [],
    selectedMentee: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
};

export const menteesSlice = createSlice({
    name: "mentees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMentees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMentees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(getMentees.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
            })
            .addCase(getSingleMentees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleMentees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(getSingleMentees.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
            })
            .addCase(updateMentee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateMentee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
            })
            .addCase(updateMentee.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
            })
    },
});

export default menteesSlice.reducer;
