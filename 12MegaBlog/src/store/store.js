import { configureStore } from "@reduxjs/toolkit";
import authsliceReducer from "./authSlice"


const store = configureStore({
    reducer:{
        authsliceReducer
    }
})




export default store;