'use strict';

var sandbox = require('nodeunit').utils.sandbox;
var context = sandbox('src/Fast.js', {tracking: {}});
var Fast = context.tracking.Fast;

module.exports = {
  setUp: function(done) {
    done();
  },

  tearDown: function(done) {
    done();
  },

  testCornerDetection: function(test) {
    test.ok(Fast.isCorner(
      150,
      [120, 180, 175, 190, 179, 180, 175, 190, 179, 200, 180, 175, 185, 100, 20, 90],
      10
    ));
    test.done();
  },

  testFindCorners: function(test) {
    var pixels = [];

    for (var i = 0; i < 64; i++) {
      if (i === 27 || i == 28) {
        pixels.push(0);
      }
      else {
        pixels.push(255);
      }
    }

    test.ok(Fast.findCorners(pixels, 8, 8));
    test.done();
  }
};
