const request = require('request');
const fs = require('fs');

let args = process.argv;


// working code example from earlier exercise....
request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

/*
REQUIREMENTS:
- Use the request library to make the HTTP request
- Use Node's fs module to write the file

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html

*/

// declare variables

// construct the request url

// request it

// parse out content-length for size

// download it

// print message if successful, throw err if not

