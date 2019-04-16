$(document).ready(function() {
    //sets <a> element within paragraph  to yellow  
    $("p").click(function() {
        $(this).children("a").css("background-color", "yellow");
        /* returns all the <a> child elements that are 
		within this paragraph*/
    });

    // Toggle the visibility of the paragraph when a button is clicked 
    $(".bottom_button").click(function() {
        $(this).prev().slideToggle('slow');// will slideToggle the preview element such as <p>.
    });

    $('img').click(function() {
        $(this).next().children('p').slideDown('slow');// will reverse the slideToggle function sliding down the paragraph.
    });
    
    $('.card').click(function(){
        $(this).toggleClass('highlight');
    });
    
    $('#select_btn').click(function() {
        $('.card:not(.highlight)').hide();
    });
    $('#all_btn').click(function(){
        $('.card').show();
    })
});
