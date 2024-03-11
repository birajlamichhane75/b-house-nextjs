"use client"
import { createSlice } from "@reduxjs/toolkit";
export type FilterDataType = {
    buyRent:string,
    location:string,
    property:string,
    budget:string,
}


type InitialType = {
    filter:  FilterDataType[]
}

const initialState:InitialType = {
    filter : []
    
}

const filterSlice = createSlice({
    name:"filter",
    initialState,

    reducers:{
        addFilter:(state,action)=>{
            
            const filterData:FilterDataType = {
                buyRent:action.payload.buyRent,
                location:action.payload.location,
                property:action.payload.property,
                budget:action.payload.budget,
            }
            state.filter = [filterData]
            
        }
    }

})

export const {addFilter} = filterSlice.actions;
export default filterSlice.reducer

