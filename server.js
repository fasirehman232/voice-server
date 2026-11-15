const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

PeerServer({
  port: port,
  path: '/',
  proxied: true,
  corsOptions: { origin: '*' }
});

console.log('Signaling server chal raha hai, port: ' + port);
