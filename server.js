const express = require('express');
const path = require('path');
const cluster = require('cluster');
const http = require('http');
const app = express();
const Fs = require('fs')
const request = require('request');
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/build', function(req, res) {
  console.log(JSON.stringify(req.query.ip));
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }

  res.sendFile(path.join(__dirname, '/build.html'));
});
app.get('/test', function(req, res) {
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/test.html'));
});
app.get('/analysis', function(req, res) {
  if (cluster.isWorker) {
    console.log(cluster.worker);
  }
  res.sendFile(path.join(__dirname, '/analysis.html'));
});
app.listen(3001);

