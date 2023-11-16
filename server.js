const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/books', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.status(400).send('Query parameter "q" is required');
    }
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: searchQuery,
        key: process.env.GOOGLE_BOOKS_API_KEY // Replace with your API key
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from Google Books API');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

