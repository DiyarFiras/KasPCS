var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        701: {
            slidesPerView: 2,
        },
        1001: {
            slidesPerView: 3,
        },
    },
    
});

var swiper = new Swiper(".slide-content2", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    },
    
});
var swiper = new Swiper(".slide-content4", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
    },
    
});
