var request = require('request');
var source 	= 'http://api.bitcoincharts.com/v1/markets.json';

var coinery = request(source, function(err, res, body) {
  if(!err && res.statusCode == 200) {
    var market = {
      virwox: JSON.parse(body)[85],
      bitstamp: JSON.parse(body)[100],
      mtgox: JSON.parse(body)[116]
    }
    return market;
  } else {  
    console.log('Status: ' + res.statusCode + '. Exiting.');
  }
});

module.exports = coinery;