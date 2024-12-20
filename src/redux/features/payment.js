import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadStripe } from '@stripe/stripe-js';
import * as api from "../api";

export const makePayment = createAsyncThunk(
  "payment/makePayment",
  async ({ paymentData, navigate, toast }, { rejectWithValue }) => {
    console.log('data is data: ', paymentData, navigate, toast);
    try {
      const response = await api.makePayment(paymentData);

      if (response.data.error) {
        // Handle Stripe error
        console.log(response.data.error);
        return rejectWithValue({ message: "Payment failed" });
      }

      // Handle successful payment
      console.log(response.data);
      toast.success("Payment successful");
    //   navigate("/all_donors");
      return response.data;
    } catch (error) {
      // Handle other errors
      console.log(error);
      return rejectWithValue({ message: "Something went wrong" });
    }
  }
);

export const getAllPayments = createAsyncThunk(
  "payment/allpayments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllPayments();
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ message: "Failed to fetch payments" });
    }
  }
);

const donationPaymentsSlice = createSlice({
  name: "donationPayments",
  initialState: {
    payment: {},
    payments: [],
    userPayments: [],
    error: "",
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      // makePayment reducers
      .addCase(makePayment.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.loading = false;
        // Update the state or perform any necessary actions after successful payment
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // getAllPayments reducers
      .addCase(getAllPayments.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(getAllPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default donationPaymentsSlice.reducer;
