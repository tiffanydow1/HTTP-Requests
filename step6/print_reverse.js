
var getHTML = require('../step6/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

}

getHTML(requestOptions, printReverse);