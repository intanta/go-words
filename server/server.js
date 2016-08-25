/*
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
*/
import express from 'express';
import path from 'path';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
//import webpackConfig from '../webpack.config';

import { serverPort } from '../etc/config.json';

import * as db from './DataBaseUtils';

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();


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

const connected = db.setUpConnection();

const publicPath = path.resolve(__dirname);
console.log(publicPath);
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(publicPath));
app.use(cors({ origin: '*' }));

const port = isProduction ? (process.env.PORT || 80) : 3000;

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, '', 'index.html'))
})

app.get('/words', function(req, res) {
  if (connected) {
    db.listWords()
      .then(data => {
        if (data.length !== 0) {
          res.send(data);
        } else {
          res.status(204).send({ error: 'No data available in the database'});
        }
      })
      .catch(error => res.status(500).send());
  } else {
    res.status(503).send();
  }

});

app.post('/words', function(req, res) {
  if (connected) {
    db.addWord(req.body)
      .then(data => res.send(data))
      .catch(error => res.status(500).send());
  } else  {
    res.status(503).send();
  }
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on port ' + port);
});
