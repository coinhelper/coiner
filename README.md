# Coiner

A simpler way of dealing with the markets.json API of bitcoincharts.com. So far only 4 markets are supported but more are added all the time.

### Usage

To print to console:

    coiner(function(err, res) {
      if (!err) {
	console.log(res);
      }
    });

To stream to a JSON file:

    coiner.write('filename.json');

