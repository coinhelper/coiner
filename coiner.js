var request = require('request');

var coiner = function() {
  var source  = 'http://api.bitcoincharts.com/v1/markets.json';
  request.get(source, function(err, res, body) {
    console.log('Status: ' + res.statusCode);
    var data = JSON.parse(body);
    var markets = {
      virwox: data[85],
      bitstamp: data[100],
      mtgox: data[116]
    }
    console.log(markets);
  });
};


module.exports = coiner;