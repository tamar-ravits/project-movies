var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/getAllMovies', async (req, res) => {
  try {
    axios.get("http://www.omdbapi.com/?apikey=4da083bf&s=star&type=movie&page=1")
      .then(response => {
        res.status(200).json(response.data)
        console.log(response.data)
      })
  }
  catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.get('/searchMovie/:value', async (req, res) => {
  const title = req.params.value
  try {
    const url = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=4da083bf`
    const moovies = await axios.get(url);
    res.status(200).send(moovies.data);
  } catch (err) {
    res.status(400).send(err)
  }
})

router.get('/detailsMovie/:title', async (req, res) => {
  const title = req.params.title
  try {
    const url = `http://www.omdbapi.com/?i=${title}&type=movie&apikey=4da083bf`
    const movie = await axios.get(url);
    res.status(200).send(movie.data);
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
})

module.exports = router;
