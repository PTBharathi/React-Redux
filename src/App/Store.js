import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Features/Counter/CounterSlice";
import PostReducer from './Features/poster/posterSlice';
import userReducer from "./Features/user/userSlice";

export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        posts:PostReducer,
        user:userReducer
    }
})