import axios from 'axios';
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { API_URL } from '../../../config';

const backendUrl = `${API_URL}`;

export type UserProp = {
    name: string;
    email: string;
    password: string;
    role: string;
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({name, email, password, role}: UserProp, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            await axios.post(`${backendUrl}/auth/register`, {
                name,
                email,
                password,
                role
            }, config);

        } catch (e: any) {
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
              } else {
                return rejectWithValue(e.message)
              }
        }
    }
)