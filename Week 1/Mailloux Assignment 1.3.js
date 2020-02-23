var url = require ("url");

var parsedURL = url.parse("https://www.example.com/profile?name=mailloux");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
