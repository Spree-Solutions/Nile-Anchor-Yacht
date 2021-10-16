const polka = require('polka');
const { createProxyMiddleware } = require('http-proxy-middleware');
const configs = require('./variables');
const cors = require('cors');
const https = require('https');
const fs = require('fs');


const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/ssl/thenileanchor_privkey.key'),
  cert: fs.readFileSync('/etc/ssl/thenileanchor_fullchain.pem'),
});

const app = polka({server:httpsServer});

// app.use((req,res,next)=>{
//     console.log(`incoming request on url ${req.originalUrl}`);
//     next();
// })
app.use(cors({
    origin: '*'
}));

function onProxyReq(proxyReq, req, res) {
    // add custom header to request
    console.log("proxy request to", req.originalUrl)
    // or log the req
  }

  function onError(err, req, res, target) {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }
app.use(
    createProxyMiddleware('/api1', {
      target: configs.COWPAY_BASE_URL, // API endpoint 1
      changeOrigin: true,
      onProxyReq:onProxyReq,
      pathRewrite: {
        "^/api1": "",
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
      logLevel:"debug",
      onProxyReq:onProxyReq,
      onError:onError,
      pathRewrite: {
        "^/api2": "/integrator",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
app.listen(444)



// httpServer.listen(3001, () => {
//   console.log('HTTP Server running on port 3001');
// });

// httpsServer.listen(444, () => {
//   console.log('HTTPS Server running on port 444');
// });