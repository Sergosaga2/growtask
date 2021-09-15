$( document ).ready(function() {
    $(window).scroll(function() {
        var header = $('.header').offset().top;
        if(header > 1){
            $('.header').addClass('headerScroll');
        } else{
            $('.header').removeClass('headerScroll');
        }
    });
});