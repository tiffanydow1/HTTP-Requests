function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    var data = [];

    response.setEncoding('UTF-8');

    response.on('data', function(chunk) {
      console.log(data.push(chunk + '/n'));
    });

    response.on('end', function() {
      console.log(data);
    });
  });
}

getAndPrintHTMLChunks();


//1. get a given URL.
//2. function should console.log each chunk of data as it's received
//concatenated with a newline character('/n')
//3. remember to invoke(call) function you wrote.
