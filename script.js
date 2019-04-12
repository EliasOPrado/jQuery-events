$(document).ready(function() {



    $("#btn1").on("click", function() {
        $("#btn1").hide('slow'); //first funciton that will hide the element/id
        $("#btn1").show('slow'); //second function that will show th element/id
    });

    $("#btn2").on("click", function() {
        $("#btn2").fadeToggle(1000);
        $("#btn2").slideToggle('slow');
        $("#btn2").css('background-color', 'blue');
        /*$("#btn2").stop('?');*/
    });

    $("#btn3").on("click", function() {
        $("#btn3").slideUp('slow');
        $("#btn3").slideToggle('slow');

    });

    $("#btn4").on("click", function() {
        $("#btn4").hide('slow');
        $("#btn4").show('slow');
    });

    $("#btn5").on("click", function() {
        $("#btn5").hide('slow');
        $("#btn5").show('slow');
    });

    $("#btn6").on("click", function() {
        $("#btn6").hide('slow');
        $("#btn6").show('slow');
    });

    $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
});

//.show() -- the name says by itself;
//hide() -- the oposite of show();
