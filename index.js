'use strict';

module.exports = FPSControl;
function FPSControl(framerate) {
    this.setFPS(framerate);
    this.then = Date.now();
}

FPSControl.prototype.setFPS = function(value) {
    this.framerate = 1000 / value;
};

FPSControl.prototype.check = function() {
    var now = Date.now();
    var elapsed = now - this.then;

    if (elapsed > this.framerate) {
        this.then = now - (elapsed % this.framerate);
        return true;
    }

    return false;
};
