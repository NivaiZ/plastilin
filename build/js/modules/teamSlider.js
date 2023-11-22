export function teamSlider() {
  const swiperElement = document.querySelector('.team__wrapper.swiper');
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      spaceBetween: 23,
      navigation: {
        nextEl: ".team__button.swiper-button-next",
        prevEl: ".team__button.swiper-button-prev",
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
        },
      }
    });
  }
}

