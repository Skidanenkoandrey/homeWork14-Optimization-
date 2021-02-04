const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
    },

    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});