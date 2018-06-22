class NumberSpinner {
    constructor(target) {
        this.timerID = null;
        this.target = target;
    }

    start(numLength) {
        var t = this;
        (function rouletteLoop() {
            t.timerID = setTimeout(rouletteLoop, 50);
            var dispNum = Math.floor( Math.random() * "9".repeat(numLength) );
            t.target.text(("0".repeat(numLength) + dispNum).slice(-numLength));
        }());
    }
    
    stop() {
        clearTimeout(this.timerID);
        this.timerId = null;
    }
}
