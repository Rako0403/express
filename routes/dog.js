// routes/dog.js
const express = require('express'); // ← express を読み込む
const router = express.Router();    // ← router を作る
const request = require('request'); // ← request モジュール

router.get('/', (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      // Dog API は data.message に画像URLが入っている
      res.json({ url: data.message });
    } else {
      res.status(500).send("API error");
    }
  });
});

module.exports = router;
