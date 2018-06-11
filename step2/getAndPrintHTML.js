var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    var bufferedData = [];

    response.setEncoding('UTF-8');

    response.on('data', function(chunk) {

      bufferedData += chunk;
      console.log(bufferedData);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}


getAndPrintHTML();