window.addEventListener('DOMContentLoaded', () => {

    // slick-slider

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


// magnific popup

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

   try {
       new WOW().init();
   } catch (e) {}


   // burger

    const menuBurger = document.querySelector('.burger'),
        mobile = document.querySelector('.mobile'),
        mobileLinks = mobile.querySelectorAll('a'),
        mobileItems = document.querySelectorAll('.mobile__item')


    function openMenu() {

        window.addEventListener('resize', () => {
            if (window.screen.availWidth < 767 && mobile.style.display === 'none') {
                menuBurger.style.display = 'block';
            }
        });

        menuBurger.addEventListener('click', (e) => {
            mobile.style.display = 'block';
            menuBurger.style.display = 'none';
            mobileItems.forEach(item => {
                item.classList.add('animated', 'fadeInLeft');
            });
        });
    }

    function closeMenu(trigger) {
        trigger.addEventListener('click', () => {
            if (mobile.style.display === 'block') {
                mobile.style.display = 'none';
                menuBurger.style.display = 'block';
                menuBurger.classList.add('animated', 'fadeInRight');
            }
        });

        mobileLinks.forEach(item => {
            item.addEventListener('click', () => {
                if (mobile.style.display === 'block') {
                    mobile.style.display = 'none';
                    menuBurger.style.display = 'block';
                    menuBurger.classList.add('animated', 'fadeInUp');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.screen.availWidth > 767) {
                mobile.style.display = 'none';
                menuBurger.style.display = 'none';
            }
        });
    }


     try {
         openMenu();
         closeMenu(mobile);
     } catch (e) {}




});


