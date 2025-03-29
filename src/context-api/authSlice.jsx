import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://67e3e1e42ae442db76d2035d.mockapi.io";

// 🔹 Register User
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// 🔹 FIXED: Login User (Manually Checking Email & Password)
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // Fetch all registered users
      const response = await axios.get(`${API_URL}/register/register`);
      const users = response.data; // This will be an array of users

      // Find the user matching email & password
      const user = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (!user) {
        return rejectWithValue("Invalid login credentials");
      }

      return { user, token: "mockToken12345" }; // Returning mock token
    } catch (error) {
      return rejectWithValue(error.response?.data || "Invalid login credentials");
    }
  }
);

// 🔹 Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store user data in Redux
        state.token = action.payload.token; // Store token in Redux
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
