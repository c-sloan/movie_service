import mongoose from "mongoose";

const MovieList = mongoose.Schema({
  movies: [
    {
      adult: Boolean,
      backdrop_path: String,
      genre_ids: Array,
      id: Number,
      original_language: String,
      original_title: String,
      overview: String,
      popularity: mongoose.Types.Decimal128,
      poster_path: String,
      release_date: String,
      title: String,
      video: Boolean,
      vote_average: mongoose.Types.Decimal128,
      vote_count: Number,
    },
  ],
});

export default MovieList;
