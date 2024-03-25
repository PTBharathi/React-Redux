import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Features/Counter/CounterSlice";

export const store=configureStore({
    reducer:{
        counter:CounterReducer,
    }
})