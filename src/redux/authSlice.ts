import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../types/ User.ts";


interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

const initialUser = localStorage.getItem('user');
const initialState: AuthState = {
    user: initialUser ? JSON.parse(initialUser) : null,
    isAuthenticated: !!initialUser,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
