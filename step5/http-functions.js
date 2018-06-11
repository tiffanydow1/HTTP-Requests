
var https = require('https');

 function getHTML (options, callback) {

    https.get(options, function(response) {
    var bufferedData = "";

    response.setEncoding('UTF-8');

    response.on('data', function(chunk) {
      bufferedData += chunk;
      callback(bufferedData);

     });
    response.on('end', function() {
      console.log('Response stream complete');
  });
 });
}



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

module.exports = {
  getHTML: getHTML
};

