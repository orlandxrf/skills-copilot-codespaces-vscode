// Create web server application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Add middleware
app.use(bodyParser.json());
app.use(cors());

// Create a route for our app
app.get('/', (req, res) => {
  res.send('Hello from my server!');
});

// Create a route to post comments
app.post('/comments', (req, res) => {
  console.log('req.body', req.body);
  res.send('You have reached the post route');
});

// Create a route to get comments
app.get('/comments', (req, res) => {
  console.log('req.body', req.body);
  res.send('You have reached the get route');
});

// Create a route to get comments
app.get('/comments/:id', (req, res) => {
  console.log('req.body', req.body);
  res.send('You have reached the get route');
});

// Create a route to delete comments
app.delete('/comments/:id', (req, res) => {
  console.log('req.body', req.body);
  res.send('You have reached the delete route');
});

// Create a route to update comments
app.put('/comments/:id', (req, res) => {
  console.log('req.body', req.body);
  res.send('You have reached the update route');
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});