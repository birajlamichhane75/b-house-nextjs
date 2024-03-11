"use client"
import { createSlice } from "@reduxjs/toolkit";

export type UserType = {
    name:string
    email:string
    phone:string,
    hName:string,
    hImg:string,
    hLocation:string,
    hRent:number,
    hRooms:{
        bed:number,
        bath:number

    }


}
type InitialType = {
    user : UserType[]
}

const initialState:InitialType = {
    user: []
    
}

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        
        addBooking:(state,action) =>{
            console.log(action);
            const userData = {
                name:action.payload.name,
                email:action.payload.email,
                phone:action.payload.phone,
                hName:action.payload.hName,
                hImg:action.payload.hImg,
                hLocation:action.payload.hLocation,
                hRent:action.payload.hRent,
                hRooms:action.payload.hRooms
            }
            state.user.push(userData)
            
        }
    }

})

export const {addBooking} = userSlice.actions;
export default userSlice.reducer

