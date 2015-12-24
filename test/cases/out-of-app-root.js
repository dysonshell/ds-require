'use strict';
var path = require('path');
var tape = require('tape');
var pick = require('lodash.pick');
process.env.NODE_CONFIG_DIR = path.join(__dirname, '..', 'example', 'config');

var config = require('config');
delete config.dsComponentPrefix;

tape(function(test) {
    test.plan(7);
    require('../../');
    test.equal(require.resolve('dsc/index/partials/t.html'), path.resolve(__dirname, '../example/dsc/index/partials/t.html'));
    require('../hello');
    console.log('global', pick(global, 'z a b c d t'.split(' ')));
    test.equal(global.z, 'z');
    test.equal(global.a, 'ma');
    test.equal(global.b, 'b');
    test.equal(global.c, 'mc');
    test.equal(global.d, 'md');
    test.equal(global.t.trim(), '<span>hello</span>');
});
