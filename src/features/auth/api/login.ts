import { API_URL } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const backendUrl = `${API_URL}`;

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const { data } = await axios.post(
                `${backendUrl}/auth/login`,
                {email, password},
                config
            )

            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (e) {
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
            } else {
                return rejectWithValue(e.message)
            }
        }
    }
)