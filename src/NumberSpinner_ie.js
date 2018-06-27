var NumberSpinner = function(target, format) {
    this.timerIDs = new Array();
    this.target = target;
    this.format = format;
    this.interval = 30;
};
(function(){
    NumberSpinner.prototype.start = function(numLength) {
        var t = this;
        var re = /(\d)(?=(\d\d\d)+(?!\d))/g;
        var minNum = 1;
        var minLoop = 0;
        while (minLoop < numLength - 1) {
            minNum = minNum * 10;
            minLoop++;
        }
        var maxNum = 1;
        var maxLoop = 0;
        while (maxLoop < numLength) {
            maxNum = maxNum * 10;
            maxLoop++;
        }
        maxNum = maxNum - 1;

        this.timerIDs.push(setInterval(function(){
            var randomNum = Math.floor( (Math.random() * maxNum) + minNum );
            if (t.format) {
                randomNum = String(randomNum).replace(re, '$1,');
            }
            t.target.text(randomNum);
        }, t.interval));
    };
    NumberSpinner.prototype.stop = function() {
        var i = 0;
        while (i < this.timerIDs.length) {
            clearInterval(this.timerIDs[i++]);
        }
        this.timerIDs = new Array();
    };
}());
