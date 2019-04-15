$(document).ready(function() {

     $('p').click(function() {
         $(this).children('a').css('background-color','yellow');
     })

    $("#btn1").on("click", function() {
        $("#btn1").hide('slow'); //first funciton that will hide the element/id
        $("#btn1").show('slow'); //second function that will show th element/id
        $('#par1').toggle('1000');
        
    });

    $("#btn2").on("click", function() {
        $("#btn2").fadeToggle(1000);
        $("#btn2").slideToggle('slow');
        $("#btn2").css('background-color', 'blue');
        $('#par2').slideUp('1000');
        $('#par2').slideToggle('1000');
        /*$("#btn2").stop('?');*/
    });

    $("#btn3").on("click", function() {
        $("#btn3").slideUp('slow');
        $("#btn3").slideToggle('slow');
        $('#par3').toggle('1000');

    });

    $("#btn4").on("click", function() {
        $("#btn4").hide('slow');
        $("#btn4").show('slow');
        $('#par4').slideToggle('1000');
    });

    $("#btn5").on("click", function() {
        $("#btn5").hide('slow');
        $("#btn5").show('slow');
        $('#par5').toggle('1000');
    });

    $("#btn6").on("click", function() {
        $("#btn6").hide('slow');
        $("#btn6").show('slow');
        $('#par6').slideToggle('1000');
    });
    
    /*fade buttom with moused hovering*/
    /*three initial cards only*/
    $("#btn1").mouseenter(function(){
        $('#btn1').fadeTo(1000, 0.5);// initial effect when hovering.
        $('#btn1').fadeTo(1000, 1);// effect when finishs hovering.
    });
    
     $("#btn2").mouseenter(function(){
        $('#btn2').fadeTo(1000, 0.5);// initial effect when hovering.
        $('#btn2').fadeTo(1000, 1);// effect when finishs hovering.
    });
    
     $("#btn3").mouseenter(function(){
        $('#btn3').fadeTo(1000, 0.5);// initial effect when hovering.
        $('#btn3').fadeTo(1000, 1);// effect when finishs hovering.
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
