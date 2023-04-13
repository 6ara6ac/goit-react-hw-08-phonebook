import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [logIn.fulfilled](state, action){
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [logOut.fulfilled](state){
            state.user = {name: null, action: null}
            state.token = null;
            state.isLoggedIn = false;
        }

    }
})

export const authReducer = authSlice.reducer