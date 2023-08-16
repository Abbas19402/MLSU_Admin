import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        faculty: null,
        loginStatus: false
    },
    reducers: {
        LOGIN: (state, action) => {
            state.faculty = action.payload,
            state.loginStatus = true
        },
        LOGOUT: (state) => {
            state.loginStatus = false
        }
    }
})

export const { LOGIN, LOGOUT } = AuthSlice.actions
const authReducer = AuthSlice.reducer;
export default authReducer