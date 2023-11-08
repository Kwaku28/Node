const axios = require('axios');

const url = 'http://localhost:3000';

axios.get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .post(url, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then((response) => {
    console.log(`statusCode: ${response.statusCode}`)
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error)
  });
