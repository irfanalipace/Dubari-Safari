import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_LOGIN, BASE_URL } from "../../../utils/baseURL";

const login = createAsyncThunk(
   "auth/login/admin",
   async (data, { rejectWithValue }) => {
      try {
         const response = await axios.post(`${BASE_URL}${AUTH_LOGIN}`, data);
         return response;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const logout = createAsyncThunk(
   "auth/logout",

   async (data, { rejectWithValue }) => {
      console.log(data, 'dada')
      try {
         const response = await axios.post(`${BASE_URL}${AUTH_LOGOUT}`, data);
         return response;
      } catch (error) {
         return rejectWithValue(error.message);
      }

   }
);

export { login, logout };
