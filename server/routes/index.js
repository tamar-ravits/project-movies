var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async(req,res) => {
  console.log('hii');
    const url = 'http://www.omdbapi.com/?apikey=4da083bf&s=star&type=movie&page=1';
    try {
      const movies = await fetch(url);
      return movies;
    }
    catch(error) {
      res.send(error)
    }
}
);

module.exports = router;
