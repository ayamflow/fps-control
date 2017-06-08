'use strict';

var test = require('tape');
var FPSControl = require('../');

test('fps test', function(assert) {
    var interval;
    var frame = 0;
    var count = 0;
    var fps = new FPSControl(30);

    function loop() {
        if (count >= 150) {
            clearInterval(interval);
            assert.ok(frame >= count * 2, 'At 30fps, it should skip around half of the frames')
            assert.end();
        }

        frame++;

        if (!fps.check()) return;

        count++;
    }

    interval = setInterval(loop, 1000/60);
});