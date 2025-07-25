import { createSlice } from "@reduxjs/toolkit";
// import { defaultAllowedOrigins } from "vite";

export const authSlice = createSlice({
    name : "auth",
    
    initialState : {
        loading : false
    },
    reducers :{
        //actions

        setLoading : (state ,  action) =>{
            state.loading = action.payload
        }
    }
})


export const {setLoading} = authSlice.actions
export default authSlice.reducer 