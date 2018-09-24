const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/var/run/secrets/openshift.io/app-certs/tls.key'),
  cert: fs.readFileSync('/var/run/secrets/openshift.io/app-certs/tls.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
