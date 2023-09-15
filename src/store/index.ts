/// <reference types="redux-persist" />
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filterSlice from "@/store/filters";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";


const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    filter: filterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;