# Coiner

A module to simplify using the bitcoincharts.com market API.

### Usage

Simply call the coiner() function and you will get the JSON for virWox, MtGox and BitStamp (more to come) in JSON form, without having to deal with the clumsy block of hundreds of markets that BitcoinCharts normally returns.

### Example

    var coiner = require('./coiner');
    coiner();