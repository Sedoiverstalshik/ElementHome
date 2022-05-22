const swiper = new Swiper('.popular__swiper, .reviews__swiper', {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 6.5,
  // Navigation arrows
  navigation: {
    nextEl: '.popular__swiper-next, .swiper-button-next',
    prevEl: '.popular__swiper-prev, .swiper-button-prev',
  },
});