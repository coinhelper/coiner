var request = require('request');
var fs      = require('fs');

function coiner(cb) {
  var source  = 'http://api.bitcoincharts.com/v1/markets.json';
  request.get(source, function(err, res, body) {
    console.log('Status: ' + res.statusCode);
    if (!err && res.statusCode == 200) {
      var data = JSON.parse(body);
      var markets = {
        bitstampUSD: data[100],
        mtgoxUSD: data[116],
        mtgoxDKK: data[19],
        virwoxSLL: data[85]
      }
    }
    cb(null, markets);
  });
}

module.exports = coiner;

coiner.write = function(filename) {
  var writer = fs.createWriteStream(filename);
  coiner(function(err, res) {
    writer.write(JSON.stringify(res));
  });
}
