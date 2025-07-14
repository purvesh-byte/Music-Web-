const axios = require('axios');

const apiKey = 'AIzaSyCyUV_B1_wxzAGVlboOwc4V7cZVoaKMM2c';
const searchQuery = 'old songs';

const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&part=snippet&maxResults=10`;

axios.get(apiUrl)
  .then((response) => {
    // Process the search results here without exposing them to the user.
    const searchResults = response.data.items;
    // Do something with the results, such as storing them in your database.
  })
  .catch((error) => {
    // Handle errors here.
    console.error(error);
  });
