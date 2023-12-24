import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {createSong,getSongsByArtist} from "../api/songApi";

const initialState={
    isLoading:false,
    songs:[],
    songFilterParam:null,
};

export const fetchSongsByArtist=createAsyncThunk("song/fetchSongs",getSongsByArtist);

const songSlice=createSlice({
    name:"song",
    initialState,
    reducers:{
        clearSongs:(state)=>{
            state.songs=[];
        },
        setSongFilterParam:(state,action)=>{
            state.songFilterParam=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSongsByArtist.pending,(state)=>{
            state.isLoading=true;
        }).addCase(fetchSongsByArtist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.songs=action.payload
        }).addCase(fetchSongsByArtist.rejected,(state)=>{
            state.isLoading=false;
        })
    }
});

export const {clearSongs, setSongFilterParam}=songSlice.actions;
export default songSlice.reducer;