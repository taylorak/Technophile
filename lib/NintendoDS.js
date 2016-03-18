var extend = require('./extend');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;