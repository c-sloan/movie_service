import express from 'express';
import fetch from 'node-fetch';
let router = express.Router();

const url = `https://api.themoviedb.org/3/movie/550?api_key=89d8f7d760281aefe165ed988df9fe50`;

const options = {
	method: 'GET',
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