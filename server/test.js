const fetch = require('node-fetch');

let names = [];

fetch('https://api.jikan.moe/v4/anime?q=N')
  .then(response => response.json())
  .then(data => {
    console.log(data.images)
  })
  .catch(error => console.error('Error:', error));
