import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";

export const createUserRequest = createAsyncThunk(
  "userRequest/createUserRequest",
  async (userRequestData, { rejectWithValue }) => {
    try {
      console.log('userRequestData: ',userRequestData);
      const response = await api.createUserRequests(userRequestData);
      // Handle successful creation of user request
      console.log(response.data);
      toast.success('User request submitted')
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
      toast.error('Something went wrong')
      return rejectWithValue({ message: "Something went wrong" });
    }
  }
);

export const getUserRequests = createAsyncThunk(
  "userRequest/getUserRequests",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getUserRequests();
      // Handle successful retrieval of user requests
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
      return rejectWithValue({ message: "Something went wrong" });
    }
  }
);

export const deleteUserRequest = createAsyncThunk(
  "userRequest/deleteUserRequest",
  async ({id}, { rejectWithValue }) => {
    try {
      console.log('id: ',id);
      const response = await api.deleteUserRequest(id);
      // Handle successful deletion of user request
      console.log(response.data);
      toast.success('User request deleted');
      return id;
    } catch (error) {
      // Handle errors
      console.log(error);
      toast.error('Something went wrong');
      return rejectWithValue({ message: "Something went wrong" });
    }
  }
);


const userRequestSlice = createSlice({
  name: "userRequest",
  initialState: {
    userRequest: {},
    userRequests: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [createUserRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [createUserRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.userRequests.push(action.payload);
    },
    [createUserRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUserRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUserRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.userRequests = state.userRequests.filter(
        (userRequest) => userRequest._id !== action.payload
      );
    },
    [deleteUserRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [getUserRequests.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserRequests.fulfilled]: (state, action) => {
      state.loading = false;
      state.userRequests = action.payload;
    },
    [getUserRequests.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userRequestSlice.reducer;
