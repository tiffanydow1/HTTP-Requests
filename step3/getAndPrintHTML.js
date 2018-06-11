var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    var bufferedData = [];

    response.setEncoding('UTF-8');

    response.on('data', function(chunk) {

      bufferedData += chunk;
      console.log(bufferedData);
    });

    response.on('end', function() {
      console.log('Response stream complete');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



getAndPrintHTML(requestOptions);