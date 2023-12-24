import axios from "axios";

export const createSong=async(payload)=>{
    try {
        const response=await axios.post("http://localhost:3001/api/songs",payload);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getSongsByArtist=async(payload)=>{
    try {
        const artistId=payload;
        const response=await axios.get(`http://localhost:3001/api/songs/${artistId}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};