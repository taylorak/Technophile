var extend = require('./extend');
var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;