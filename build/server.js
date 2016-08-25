'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../etc/config.json');

var _DataBaseUtils = require('./DataBaseUtils');

var db = _interopRequireWildcard(_DataBaseUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import webpackConfig from '../webpack.config';

var isProduction = process.env.NODE_ENV === 'production'; /*
                                                          import webpack from 'webpack';
                                                          import webpackMiddleware from 'webpack-dev-middleware';
                                                          import webpackHotMiddleware from 'webpack-hot-middleware';
                                                          */

var isDeveloping = !isProduction;

var app = (0, _express2.default)();

// Webpack dev server
/*
if (isDeveloping) {
  const WEBPACK_PORT = 3001;
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.listen(WEBPACK_PORT, 'localhost', function (err, result) {
    if (err) {  console.log(err); }
    console.log('WebpackDevServer listening at localhost:'+WEBPACK_PORT);
  });
}
*/

var connected = db.setUpConnection();

var publicPath = _path2.default.resolve(__dirname);
console.log(publicPath);
app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_express2.default.static(publicPath));
app.use((0, _cors2.default)({ origin: '*' }));

var port = isProduction ? process.env.PORT || 80 : 3000;

app.get('/', function (request, response) {
  response.sendFile(_path2.default.resolve(__dirname, '', 'index.html'));
});

app.get('/words', function (req, res) {
  console.log('got to server side');
  if (connected) {
    db.listWords().then(function (data) {
      if (data.length !== 0) {
        res.send(data);
      } else {
        res.status(204).send({ error: 'No data available in the database' });
      }
    }).catch(function (error) {
      return res.status(500).send();
    });
  } else {
    res.status(503).send();
  }
});

app.post('/words', function (req, res) {
  console.log('got to server side');
  if (connected) {
    db.addWord(req.body).then(function (data) {
      return res.send(data);
    }).catch(function (error) {
      return res.status(500).send();
    });
  } else {
    res.status(503).send();
  }
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
var server = _http2.default.createServer(app);

server.listen(port, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Server running on port ' + port);
});
//# sourceMappingURL=server.js.map