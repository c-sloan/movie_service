import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import MovieListSchema from "./schema/MovieListSchema.js"
import movies from "./routes/movies.js"

dotenv.config()

const app = express()
const MovieList = mongoose.model("movieList", MovieListSchema)

app.use(express.json())
app.use("/movies", movies)

const port = process.env.PORT || 5500
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

app.listen(port, () => console.log(`Listening on Port: ${port}`))

const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster89537.3rfwxvl.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  dbName: "horror_movies",
})

const saveMovies = async () => {
  const finalList = await createList()
  const movieList = new MovieList({ movies: finalList })
  try {
    await movieList.save()
  } catch (err) {
    console.log(err.message)
  }
}
