/* jshint node: true */
'use strict';
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-engine-dummy',
  lazyLoading: false
});
