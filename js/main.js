const swiper = new Swiper('.popular__swiper, .reviews__swiper', {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 6.5,
      spaceBetween: 20
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.popular__swiper-next, .swiper-button-next',
    prevEl: '.popular__swiper-prev, .swiper-button-prev',
  },
});


// $('.gallery__img-box').magnificPopup({
//   type: 'image',
//   gallery: {
//     enabled: true
//   }
// });

$('.gallery__img-box').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
});

$('.popup__link').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});


// modal
const modalButtons = document.querySelectorAll('[data-modal-button]')
const modalCloseButton = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')

console.log(modalButtons);
console.log(modalCloseButton);
console.log(allModals);

modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalButton
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('none');

    modal.querySelector('.modal__windows').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
});

modalCloseButton.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('none');
  });
});

allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('none');
  });
});