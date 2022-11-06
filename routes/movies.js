import express from "express";
import fetch from "node-fetch";
import "dotenv/config.js";

let router = express.Router();
let url = new URL("https://api.themoviedb.org/3/discover/movie");
const API_KEY = process.env.API_KEY;
const AUTH_TOKEN = process.env.AUTH_TOKEN;


// { id: 27, name: 'Horror' },

const apiOptions = {
  method: "GET",
  headers: { Authorization: "Bearer " + AUTH_TOKEN },
};

router.get("/popular", async (req, res) => {
  const result = await getPopularMovies()
  console.log(result)
  return res.send("Received a GET HTTP method");
});

router.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

router.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

router.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

export const getMovies = async (currPage) => {
  url.searchParams.append("page", currPage);
  try {
    const res = await fetch(url, apiOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMovies = async (currPage) => {
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("with_genres", 27);
  url.searchParams.append("language", "en-US");
  try {
    const res = await fetch(url, apiOptions);
    const json = await res.json();
    return json.results;
  } catch (err) {
    console.log(err);
  }
};

export default router;
