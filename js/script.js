$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        loop: true,
        navText : ["<",">"],
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            490:{
                items:3,
                nav:false
            },
            769:{
                items:4,
                nav:true,
                loop:false
            }
        }

    });

    $(".owl-carousel-top").owlCarouselTop({
        items: 1,
        loop: true,
        dots: true,
        dotsData:true,
        autoplay:true,
        autoplayTimeout:3000,


    });

});