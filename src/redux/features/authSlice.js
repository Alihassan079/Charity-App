import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success("Logged in Successfully");
      console.log(response);
      navigate(response.data?.result?.type === 'Admin' ? "/adminpanel" : '/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success("Registered Successfully");
      navigate("/signin");
      return response.data;
    } catch (err) {
      toast.error(err.response?.data?.message)
      return rejectWithValue(err.response.data);
    }
  }
);

export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      toast.success("Google sign-in Successed");
      navigate("/home");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.forgetPassword(email);
      toast.success('Email has been sent to your account');
      return response.data;
    } catch (err) {
      toast.error(err.response?.data?.error);
      return rejectWithValue(err.response?.data?.error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({data, navigate}, { rejectWithValue }) => {
    console.log(data, navigate);
    try {
      const response = await api.resetPassword(data);
      console.log(response?.data?.message);
      toast.success(`${response?.data?.message}`);
      navigate("/signin");
      return response.data;
    } catch (err) {
      toast.error(err.response?.data?.error);
      return rejectWithValue(err.response?.data?.error);
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      // localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      // state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [googleSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [googleSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [googleSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [forgetPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [forgetPassword.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [forgetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [resetPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
