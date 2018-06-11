
var getHTML = require('../step6/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

}

getHTML(requestOptions, printLowerCase);