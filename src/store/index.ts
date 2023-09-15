/// <reference types="redux-persist" />
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filterSlice from "@/store/filters";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
    filter: filterSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
