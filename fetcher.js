/*
REQUIREMENTS
============
- Use the request library to make the HTTP request
- Use Node's fs module to write the file

SAMPLE INPUT & EXPECTED OUTPUT
> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
*/


const request = require('request');

const fs = require('fs');

let args = process.argv;
args = args.splice(2);
console.log(args);


// declare variables
const urlToGet = args[0];
const localPathToSave = args[1];

//console.log('urlToGet', urlToGet, 'localPathToSave', localPathToSave);

request(urlToGet, (error, response, body) => {
  console.log('REQUEST error:', error); // Print the error if one occurred
  console.log('REQUEST statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('REQUEST body:', body); // Print the HTML the page.

  // HAPPY PATH
  fs.writeFile(localPathToSave, body, function(err) {
    //console.log(body);
    if(err) {
        return console.log('err: ', err);
    } else {
      const stats = fs.statSync(localPathToSave);
      const fileSizeInBytes = stats["size"];
      return console.log('Downloaded and saved ' + fileSizeInBytes + ' bytes to ' + localPathToSave);
    }
  }); 
});


