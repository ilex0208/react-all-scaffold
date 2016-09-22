require('babel-register');

const webpack = require('webpack');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./webpack.config');

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();

// Webpack developer
if (isDeveloping) {
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

//  RESTful API
const publicPath = path.resolve(__dirname);
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(publicPath));

const port = isProduction ? (process.env.PORT || 80) : 3000;

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '', 'index.html'));
});

app.put('/api/auth', function(req, res) {
  const credentials = req.body;
  if(credentials.userName==='ilex' && credentials.password==='123456'){
    res.cookie('uid', '1', {domain:'127.0.0.1'});
    res.json({'userName': credentials.userName, 'role': 'ADMIN', 'uid': 1});
  }else{
    res.status('500').send({'message' : 'Invalid user/password'});
  }
});

app.post('/api/my', function(req, res) {
  res.json({'userName': 'ilex', 'role': 'ADMIN', 'uid': 1});
});

app.post('/api/logout', function(req, res) {
  res.clearCookie('uid');
  res.json({'userName': 'ilex', 'role': 'ADMIN'});
});

app.listen(port, function(error, result) {
  console.log('请在浏览器中打开：http://localhost:3000/');
  if (error) {
    console.error(error);
  } else {
    console.log('Express Server,监听端口:', port);
  }
});
