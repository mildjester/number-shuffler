module.exports = {
    timerIDs : [],
    target : null,
    formatFlg : true,
    interval : 30,
    digit : 3,
    busy: false,

    init: function(target) {
        this.target = target;
        return this;
    },

    setOption: function(option) {
        if (typeof option.format == 'boolean') {
            this.formatFlg = option.format;
        }
        if (typeof option.interval == 'number') {
            this.interval = option.interval;
        }
        if (typeof option.digit == 'number') {
            this.digit = option.digit;
        }
    },

    start: function() {
        if (this.busy) {
            return;
        }
        this.busy = true;

        var t = this;
        var re = /(\d)(?=(\d\d\d)+(?!\d))/g;
        this.timerIDs.push(setInterval(function(){
            var randomNum = Math.floor( Math.random() * "9".repeat(t.digit) );
            var zeroPadNum = ("0".repeat(t.digit) + randomNum).slice(-t.digit);
            if (t.formatFlg) {
                zeroPadNum = String(zeroPadNum).replace(re, '$1,');
            }
            t.target.innerText = zeroPadNum;
        }, t.interval));
    },

    stop: function() {
        for(let timerID of this.timerIDs) {
            clearInterval(timerID);
        }
        this.timerIDs = new Array();
        this.busy = false;
    }
}
