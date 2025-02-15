import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currArtistObj) => {
  const newArtistObj = { ...currArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currSongObj) => {
  const newSongObj = { ...currSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtist = await db.collection("artists").insertMany(newArtistArray);


console.log(responseArtist)
console.log(responseSongs)