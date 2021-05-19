'use strict';
const path = require('path');
const ref = require('electron-node-ref');
const assert = require('assert');

assert(ref.instance);

const bindings = require('electron-bindings')('electron-node-ffi');
module.exports = bindings.initializeBindings(ref.instance);
