import axios from "axios";

export const getAllArtists=async()=>{
    try {
        const response=await axios.get("http://localhost:3001/api/artists");
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const createArtist=async(payload)=>{
    try {
        const response=await axios.post("http://localhost:3001/api/artists",payload);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteArtist=async(payload)=>{
    try {
        const artistId=payload;
        const response=await axios.delete(`http://localhost:3001/api/artists/${artistId}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};