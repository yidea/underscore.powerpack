// Testing setup
// Deprecated since using browserify, include this file in testem.json src_files if not using browserify

// Export modules to global scope as necessary (only for testing)
if (typeof process !== 'undefined' && process.title === 'node') {
  // node
  isBrowser = false;
  expect = require('chai').expect;
  sinon = require('sinon');
  // dependency
  var _ = require("../lib/underscore.powerpack");

} else {
  // browser
  isBrowser = true;
  expect = chai.expect;
}
