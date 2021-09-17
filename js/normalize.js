$( document ).ready(function() {
    $(window).scroll(function() {
        var header = $('.header').offset().top;
        if(header > 1){
            $('.header').addClass('headerScroll');
        } else{
            $('.header').removeClass('headerScroll');
        }
    });

    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.btn-menu').on('click', () => {
        $('.btn-menu').toggleClass('btn-menu-active');
        $('.dropdown').toggleClass('dropdownActive');
        $('body').toggleClass("bodyNoneScroll");
    });

    $('.openModal').on('click', (e) => {
        $('.modalWrapper').addClass('modalWrapperActive');
        $('.global').addClass('blur');
        e.preventDefault();
    });
    $('.closedImg').on('click', (e) => {
        $('.modalWrapper').removeClass('modalWrapperActive');
        $('.global').removeClass('blur');
        e.preventDefault();
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
    
    $('.accordeonItem').on('click', function() {
        $(this).find('.accordeionTextBlock').slideToggle(150);
		$(this).find('.accordeionTitleBlock').toggleClass('accordeionTitleBlockActive');
        $(this).find('.accordImg').toggleClass('accordImgActive');
        $('.accordeonItem').not(this).find('.accordeionTextBlock').hide(150);
        $('.accordeonItem').not(this).find('.accordeionTitleBlock').removeClass('accordeionTitleBlockActive');
        $('.accordeonItem').not(this).find('.accordImg').removeClass('accordImgActive');
    });
    $(document).mouseup(function (e){
        var accordeonItem = $('.accordeonItem');
        var accordeonTitle = $('.accordeionTitleBlock')
        var accordeonContent = $('.accordeionTextBlock');
        var accordeonArrow = $('.accordImg');
        if (!accordeonItem.is(e.target) && accordeonItem.has(e.target).length === 0) {
          accordeonContent.hide(150);
          accordeonArrow.removeClass('accordImgActive');
          accordeonTitle.removeClass('accordeionTitleBlockActive');
        };
        e.stopPropagation();
      });
    
});