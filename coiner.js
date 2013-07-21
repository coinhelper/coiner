var request = require('request');
var source  = 'http://api.bitcoincharts.com/v1/markets.json';

var coiner = request.get(source, function(err, res, body) {
  console.log('Status: ' + res.statusCode);
  res.setEncoding('utf8');
  var markets = {
    virwox: JSON.parse(body)[85],
    bitstamp: JSON.parse(body)[100],
    mtgox: JSON.parse(body)[116]
  }
  console.log(markets);
});

module.exports = coiner;