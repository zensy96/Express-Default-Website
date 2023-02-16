// Imports
const express = require("express");
const app = express();
const port = 8080;

// Select the static to public folder
app.use(express.static('public'));

// Require the folders with data
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.set('views', './views');

// Render the pages
app.get("/", (req, res) =>
  res
    .status(200)
    .sendFile(__dirname + '/views/index.html')
);
app.get("*", (req, res) =>
  res
    .status(404)
    .sendFile(__dirname + '/views/error.html')
);

// Start app with (nodemon app.js)
app.listen(port, () => {
  console.log(`${port}`);
});