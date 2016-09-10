

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

console.log("Host " + server_host);
console.log("Port " + server_port);

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(server_port, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Listening at http://localhost:' + port);
// });

const path = require('path')
const express = require('express')

const Server = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './index.html')
    const publicPath = express.static(path.join(__dirname, './dist'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}


const port = (process.env.PORT || 3000)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
