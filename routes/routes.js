import express from "express";
import fetch from "node-fetch";
import "dotenv/config.js";

let router = express.Router();

let url = new URL(`https://api.themoviedb.org/3/discover/movie/`);

const API_KEY = process.env.API_KEY;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
url.searchParams.append("api_key", API_KEY);
url.searchParams.append("with_genres", 27);
// { id: 27, name: 'Horror' },

const options = {
  method: "GET",
  headers: { Authorization: "Bearer " + AUTH_TOKEN },
};

export const getMovies = async (currPage) => {
  url.searchParams.append("page", currPage);
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export default router;
