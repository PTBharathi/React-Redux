import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Features/Counter/CounterSlice";
import PostReducer from './Features/poster/posterSlice';

export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        posts:PostReducer,
    }
})