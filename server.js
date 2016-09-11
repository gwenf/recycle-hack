var express = require('express');

var path = require('path');


     const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

app = express();


app.use(express.static(__dirname));
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(webpackHotMiddleware(compiler))

app.get('*', function (req, res) {
        res.redirect('index.html');
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('server started '+port);

