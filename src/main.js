$(function(){
    var numverFormat = true;
    var ns = new NumberSpinner($('#spinedNumber'), numverFormat);

    // click start button
    $('#startButton').click(function() {
        ns.start($(('#spinedNumber')).text().replace(',','').length);
        $('#startButton').prop("disabled", true);
    });

    // click stop button
    $('#stopButton').click(function() {
        ns.stop();
        $('#startButton').prop("disabled", false);
    });
});
