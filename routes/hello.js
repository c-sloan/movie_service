import express from 'express';
import fetch from 'node-fetch';
import "dotenv/config.js";

let router = express.Router();

let url = new URL(`https://api.themoviedb.org/3/discover/movie/`)

const API_KEY = process.env.API_KEY
const AUTH_TOKEN = process.env.AUTH_TOKEN
url.searchParams.append('api_key', API_KEY)
url.searchParams.append('with_genres', 27)
// { id: 27, name: 'Horror' },

const options = {
	method: 'GET',
	headers: {Authorization:"Bearer " + AUTH_TOKEN}, 
};

/* fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
*/

// async await syntax
try {
	const res = await fetch(url, options);
	const json = await res.json();
	console.log(json);
} catch (err) {
	console.log(err);
}

/*
router.get(`/`, function (req, res) {
	res.status(200).json({msg: `It's a GET request.`});
});
router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.`});
});
router.put(`/`, function (req, res) {
	res.status(200).json({msg: `It's a PUT request.`});
});
router.delete(`/`, function (req, res) {
	res.status(200).json({msg: `It's a DELETE request.`});
});
*/

export default router