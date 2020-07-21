var express = require('express')
var bodyParser = require('body-parser')
const https = require('https');


var app = express()
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

https.get('https://gojira.havelsan.com.tr/login.jsp', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});