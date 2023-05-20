import { API_URL } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const backendUrl = `${API_URL}`;

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: { email: string, password: string }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const response = await axios.post(
        `${backendUrl}/auth/login`,
        data,
        config
      );

      const userToken = response.data.accessToken;
      localStorage.setItem('userToken', userToken);

      const userDetailsResponse = await axios.get(`${backendUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      });

      const userDetails = userDetailsResponse.data;

      console.log(userDetails);

      return { userToken, userDetails };
    } catch (e: any) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);
