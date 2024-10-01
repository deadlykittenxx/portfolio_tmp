var isVisible = false;


$(document).ready(function() {


    //01. css로 숨기기
    $('#navigator ul:first-child').css({
        opacity: '0'
    });

    $('#navigator').css({
        opacity: '0'
    });


    $('#navigator ul:last-child').on('mouseover', function(){

        $('#navigator ul:first-child').animate({
            opacity: '1'
        }, 1000);

    }).on('mouseout', function(){
        $('#navigator ul:first-child').stop(true).animate({
            opacity: '0'
        }, 500, 'linear');
     });
    
    
});

$(window).on('scroll',function() {
    if (checkVisible($('#deskResearch'))&&!isVisible) {
        $('#navigator').animate({
            opacity: '1'
        }, 1000);
        isVisible=true;
    }

});



function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height() - 500, // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
