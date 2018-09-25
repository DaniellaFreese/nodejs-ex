    var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

    https.createServer({
      key: fs.readFileSync('/var/run/secrets/openshift.io/app-certs/tls.key'),
      cert: fs.readFileSync('/var/run/secrets/openshift.io/app-certs/tls.crt')
    }, app).listen(55555);

    app.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });

