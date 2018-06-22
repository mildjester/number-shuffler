$(function(){
    var ns = new NumberSpinner($(('#spinedNumber')));

    // click start button
    $('#startButton').click(function() {
        ns.start($(('#spinedNumber')).text().length);
        $('#startButton').prop("disabled", true);
    });

    // click stop button
    $('#stopButton').click(function() {
        ns.stop();
        $('#startButton').prop("disabled", false);
    });
});
