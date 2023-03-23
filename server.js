const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();
const https = require('https');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/build', function(req, res) {
  let url = `http://${req.query}:8081/build`;
  http.get(url);
  res.sendFile(path.join(__dirname, '/build.html'));
});
app.get('/test', function(req, res) {
  let url = `http://${req.query}:8081/test`;
  http.get(url);
  res.sendFile(path.join(__dirname, '/test.html'));
});
app.get('/analysis', function(req, res) {
  let url = `http://${req.query}:8081/analysys`;
  http.get(url);
  res.sendFile(path.join(__dirname, '/analysis.html'));
});
app.listen(8080);

