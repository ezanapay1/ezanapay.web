import axios from 'axios';
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { API_URL } from '../../../config';

const backendUrl = `${API_URL}`;

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: any, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            await axios.post(`${backendUrl}/auth/register`, data, config);

        } catch (e: any) {
            if (e.response && e.response.data.message) {
                return isRejectedWithValue(e.response.data.message)
              } else {
                return isRejectedWithValue(e.message)
              }
        }
    }
)