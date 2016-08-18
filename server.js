const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/index.html'));
});

app.get('/kmc409-415', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/kmc409_415.html'));
});
app.get('/ksi_logo', function (req, res) {
  res.sendFile(path.join(__dirname, './static/img/svg/ksi_logo.svg'));
});
app.get('/kmc416', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/task__kmc-416/index.html'));
});
app.get('/kmc417', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/task__kmc-417/index.html'));
});
app.get('/kmc418', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/task__kmc-418/index.html'));
});
app.get('/kmc419', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/task__kmc-419/index.html'));
});
app.get('/container', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/container-main/index.html'));
});





app.listen(8080, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:8080');
});
