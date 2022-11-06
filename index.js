import dotenv  from "dotenv"
import express from 'express';
import Router from './routes/hello.js'

dotenv.config()

const app = express();

app.use(express.json());

app.use('/hello', Router);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));