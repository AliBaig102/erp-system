import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	id?: string;
	name?: string;
	email?: string;
	role?: string;
	createdAt?: string;
}

interface AuthState {
	user: User;
	accessToken: string | null;
}

const initialState: AuthState = {
	user: {},
	accessToken: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<{ user: User; accessToken: string }>
		) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
		},
		logout: (state) => {
			state.user = {};
			state.accessToken = null;
		},
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
	},
});

export const { login, logout, setUser, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
