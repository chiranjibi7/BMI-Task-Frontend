import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAllArtists,createArtist,deleteArtist} from "../api/artistApi";

const initialState={
    isLoading:false,
    artists:[]
};

export const fetchArtists=createAsyncThunk("artist/fetchArtists",getAllArtists);

const artistSlice=createSlice({
    name:"artist",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchArtists.pending,(state)=>{
            state.isLoading=true;
        }).addCase(fetchArtists.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.artists=action.payload
        }).addCase(fetchArtists.rejected,(state)=>{
            state.isLoading=false;
        })
    }
});

export default artistSlice.reducer;