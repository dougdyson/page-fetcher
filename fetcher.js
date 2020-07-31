const request = require('request');
const fs = require('fs');


let args = process.argv;
args = args.splice(2);
console.log(args);

// working code example from earlier exercise....
// request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

/*
REQUIREMENTS:
- Use the request library to make the HTTP request
- Use Node's fs module to write the file

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html

*/

// declare variables
const urlToGet = args[0];
const localPathToSave = args[1];

console.log('urlToGet', urlToGet, 'localPathToSave', localPathToSave);

// request url
request(urlToGet, (error, response, body) => {
  console.log('REQUEST error:', error); // Print the error if one occurred
  console.log('REQUEST statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('REQUEST body:', body); // Print the HTML the page.
});
  
  // //MENTOR: do I pass the body?
  // write(localPathToSave, body, err => {
  //   console.log('writing ', localPathtoSave, body);
  // });

// parse out content-length for size

// download it

// print message if successful, throw err if not

