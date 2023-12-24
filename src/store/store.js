import {configureStore} from "@reduxjs/toolkit";
import artistReducer from "../slices/artistSlice";

export const store=configureStore({
    reducer:{
        artist:artistReducer
    }
});