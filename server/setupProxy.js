const { createProxyMiddleware } = require('http-proxy-middleware');
 const configs = require('./Utilities/variables')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: configs.COWPAY_BASE_URL, // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "/",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: configs.BACKEND_API_BASE_URL, // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "/",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}