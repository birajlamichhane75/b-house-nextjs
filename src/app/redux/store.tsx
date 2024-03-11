"use client"
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slice'
import userReducer from './userslice'

export const store = configureStore({
    reducer:{
        filterData:filterReducer,
        userData : userReducer
    }
})