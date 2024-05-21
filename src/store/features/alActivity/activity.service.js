import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/Api";

const getActivity = createAsyncThunk(
    "activity/getActivity",
    async ({ rejectWithValue }) => {
        try {
            const response = await api.get(`all_activity`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export { getActivity }