import { createSlice } from '@reduxjs/toolkit'	

const authSlice: any = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logout: (state) => {
            state.user = null
            state.token = null
        }
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state: { auth: { user: any } }) => state.auth.user
export const selectCurrentToken = (state: { auth: { token: any } }) => state.auth.token