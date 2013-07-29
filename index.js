var coiner = require('./coiner');

coiner(function(err, res) {
  if (!err) {
    console.log(res);
  }
});