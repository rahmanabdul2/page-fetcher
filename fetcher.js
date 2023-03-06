// Import the 'request' and 'fs' modules
const request = require('request');
const fs = require('fs');

// Get command-line arguments (excluding the first two which are 'node' and the script file name)
const terminal = process.argv.slice(2);

// Get the URL and the path from the command-line arguments
const URL = terminal[0];
const path = terminal[1];

// Send an HTTP GET request to the specified URL
request(URL, (error, response, body) => {
  if (error) {
    // If there's an error, log it to the console
    console.error(error);
  } else {
    // If the request is successful, write the response body to the specified file
    fs.writeFile(path, body, (err) => { // 'fs.writeFileSync' block the event loop while waiting for the file to be written
      if (err) {
        // If there's an error writing to the file, log it to the console
        console.error(err);
      } else {
        // If the file is written successfully, log a success message to the console
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      }
    });
  }
});







