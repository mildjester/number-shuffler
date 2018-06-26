class NumberSpinner {
    constructor(target, format) {
        this.timerIDs = new Array();
        this.target = target;
        this.format = format;
        this.interval = 30;
    }

    start(numLength) {
        var t = this;
        var re = /(\d)(?=(\d\d\d)+(?!\d))/g;
        this.timerIDs.push(setInterval(function(){
            var randomNum = Math.floor( Math.random() * "9".repeat(numLength) );
            var zeroPadNum = ("0".repeat(numLength) + randomNum).slice(-numLength);
            if (t.format) {
                zeroPadNum = String(zeroPadNum).replace(re, '$1,');
            }
            t.target.text(zeroPadNum);
        }, t.interval));
    }

    stop() {
        for(let timerID of this.timerIDs) {
            clearInterval(timerID);
        }
        this.timerIDs = new Array();
    }
}
