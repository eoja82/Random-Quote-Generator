const express = require("express");
const request     = require("request");
require("dotenv").config();
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  })

/* app.route('/newquote')
  .get(function (req, res) {
    let url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    request (url, {json: true}, function (err, resp, body) {
      if (err) { console.log(err); }
      else if (!body) { res.json({"error": "something went wrong"}); }
      else { res.json(body); }
    });
  }) */

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});
app.listen(process.env.PORT, () => {
  console.log("Listening on PORT");
});
