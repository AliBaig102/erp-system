import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"

import authReducer from "../features/authSlice"

// Persist configuration
const persistConfig = {
	key: "root",
	version: 1,
	storage,
}

// Root reducer
const rootReducers = combineReducers({
	auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch;
// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers)

// Configure store with middleware to ignore redux-persist actions
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)