import {configureStore} from "@reduxjs/toolkit";
import artistReducer from "../slices/artistSlice";
import songReducer from "../slices/songSlice";

export const store=configureStore({
    reducer:{
        artist:artistReducer,
        song:songReducer
    }
});