const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) callback(error, null);

  // if (response && response.statusCode === 404) {
  //   callback('Request failed :(');
  //   callback('Status code: ', response && response.statusCode);
  // }

  //convert JSON to object
  const parsedData = JSON.parse(body)[0];

  if (parsedData === undefined) {
    callback(error, null);
  } else {
   callback(null, parsedData['description']);
  }

})
};

module.exports = fetchBreedDescription;

