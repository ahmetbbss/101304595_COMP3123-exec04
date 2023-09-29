const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON data for POST requests
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Ahmet Buyukbas');
  });
// GET request to /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET request to /user with query parameters
app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  res.json({ firstname:"Pritesh", lastname: "Patel" });
});

// POST request to /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname:"Pritesh", lastname: "Patel" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
