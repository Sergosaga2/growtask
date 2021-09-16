$( document ).ready(function() {
    $(window).scroll(function() {
        var header = $('.header').offset().top;
        if(header > 1){
            $('.header').addClass('headerScroll');
        } else{
            $('.header').removeClass('headerScroll');
        }
    });

    $(".owl-carousel-1").owlCarousel({
        items: 1,
        touchDrag: true,
        nav: true,
        dots: false,
        loop: true
    });
    $(".owl-carousel-2").owlCarousel({
        items: 3,
        margin: 40,
        touchDrag: true,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    
    var owl=$(".owl-carousel-2");
	owl.owlCarousel();
	$(".next").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});
          
});