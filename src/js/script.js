window.addEventListener('DOMContentLoaded', () => {
    try {
        $('.slider__inner').slick({
            speed: 2200,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
            pauseOnHover: false,
            pauseOnFocus: false,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icn/left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icn/right.svg"></button>',
            // responsive: [
            //     {
            //         breakpoint: 992,
            //         settings: {
            //             dots: true,
            //             arrows: false
            //         }
            //     }
            // ]
        });
    } catch (e) {}



   try {
       $('.gallery__wrapper').magnificPopup({
           delegate: 'img',
           type: 'image',
           removalDelay: 300,
           mainClass: 'mfp-fade',
           gallery:{
               enabled:true,
               preload: [1,2],
           }
       });
   } catch (e) {}


});


