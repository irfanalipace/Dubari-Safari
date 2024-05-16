import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/Api";

const getMentees = createAsyncThunk(
    "mentee/getMentees",
    async ({ page, size }, { rejectWithValue }) => {
        try {
            const response = await api.get(`mentee/all-mentees?industry=all&page=${page}&size=${size}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const getSingleMentees = createAsyncThunk(
    "mentee/getSingleMentees",
    async (email, { rejectWithValue }) => {
        try {
            const response = await api.get(`/mentee/get-by-email/?email=${email}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const updateMentee = createAsyncThunk(
    "mentee/updateMentee",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.put(`/mentee/set-verification/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export { getMentees, getSingleMentees, updateMentee }