import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAllArtists,createArtist,deleteArtist} from "../api/artistApi";

const initialState={
    isLoading:false,
    artists:[],
    artistRequestObj:{
        name:"",
        nationality:"",
        age:""
    },
    artistCreateResponse:null,
    artistRemoveResponse:null
};

export const fetchArtists=createAsyncThunk("artist/fetchArtists",getAllArtists);
export const postArtist=createAsyncThunk("artist/postArtist",createArtist);
export const removeArtist=createAsyncThunk("artist/removeArtist",deleteArtist)

const artistSlice=createSlice({
    name:"artist",
    initialState,
    reducers:{
        setArtistRequestObj:(state,action)=>{
            state.artistRequestObj[action.payload.name]=action.payload.value
        },
        clearArtistRequestObj:(state)=>{
            state.artistRequestObj={
                name:"",
                nationality:"",
                age:""
            };
        },
        clearArtistRemoveResponse:(state)=>{
            state.artistRemoveResponse=null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchArtists.pending,(state)=>{
            state.isLoading=true;
        }).addCase(fetchArtists.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.artists=action.payload
        }).addCase(fetchArtists.rejected,(state)=>{
            state.isLoading=false;
        });

        builder.addCase(postArtist.pending,(state)=>{
            state.isLoading=true;
        }).addCase(postArtist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.artistCreateResponse=action.payload
        }).addCase(postArtist.rejected,(state)=>{
            state.isLoading=false;
        })

        builder.addCase(removeArtist.pending,(state)=>{
            state.isLoading=true;
        }).addCase(removeArtist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.artistRemoveResponse=action.payload
        }).addCase(removeArtist.rejected,(state)=>{
            state.isLoading=false;
        })
    }
});

export const {setArtistRequestObj, clearArtistRequestObj,clearArtistRemoveResponse}=artistSlice.actions;
export default artistSlice.reducer;