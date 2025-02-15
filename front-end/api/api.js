import axios from "axios";

const { VITE_ENV } = import.meta.env;
const URL = VITE_ENV === "development" ? "http://localhost:3001/api" : "/api"; 

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
