'use strict';

var gm = require('gm');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var query = this.query.substr(1).split(' ');
  var cb = this.async();
  var result = gm(content);

  query.forEach(function(arg) {
    result.out(arg);
  });
  result.toBuffer(cb);
};

module.exports.raw = true;
