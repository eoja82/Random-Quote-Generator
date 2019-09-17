const express = require("express");

const app = express();

app.use(express.static("public"));

app.route("/")
  .get( (req, res) => {
    res.sendFile(__dirname + "/index.html");
  })

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
