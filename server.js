const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('./dist'));

app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);


app.listen(1234, () => {
  console.log('http://localhost:1234');
});
