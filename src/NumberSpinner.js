class NumberSpinner {
    constructor(target, format) {
        this.timerID = null;
        this.target = target;
        this.format = format;
    }

    start(numLength) {
        var t = this;
        (function rouletteLoop() {
            t.timerID = setTimeout(rouletteLoop, 50);
            var randomNum = Math.floor( Math.random() * "9".repeat(numLength) );
            var zeroPadNum = ("0".repeat(numLength) + randomNum).slice(-numLength);
            if (t.format) {
                var re = /(\d)(?=(\d\d\d)+(?!\d))/g;
                zeroPadNum = String(zeroPadNum).replace(re, '$1,');
            }
            t.target.text(zeroPadNum);
        }());
    }
    
    stop() {
        clearTimeout(this.timerID);
        this.timerId = null;
    }
}
