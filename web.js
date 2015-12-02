process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var serve = express();
serve.use(express.static(__dirname + '/web'));
serve.use('/files', express.static(__dirname + '/draft/files'));
serve.use('/fonts', express.static(__dirname + '/draft/fonts'));
serve.set('port', (process.env.PORT || 5555));
serve.listen(serve.get('port'), function () {
  console.log('Node app of Hoffmann Group is running at localhost:' + serve.get('port'));
  console.log('Mode: ', process.env.NODE_ENV);
});
