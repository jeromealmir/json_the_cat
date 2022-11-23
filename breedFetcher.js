const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) callback('Request failed', null);

    const parsedData = JSON.parse(body)[0];

    if (parsedData === undefined) {
      callback('Invalid Breed', null);
    } else {
      callback(null, parsedData['description']);
    }

  });
};

module.exports = fetchBreedDescription;

