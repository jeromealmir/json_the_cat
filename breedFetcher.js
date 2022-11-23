const request = require('request');
const cli = process.argv[2].toString();

const breedFetcher = (breed) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.error('Invalid URL!', error);
      return;
    }

    if (response && response.statusCode === 404) {
      console.log('Request failed :(');
      console.log('Status code: ', response && response.statusCode);
      return;
    }
    
    //convert JSON to object
    const parsedData = JSON.parse(body)[0];

    if (parsedData === undefined) {
      console.log('Breed not found :(');
    } else {
      console.log(parsedData['description']);
    }
  
  });
};

breedFetcher(cli);