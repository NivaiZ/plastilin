export function contentSlider () {
  const swiperElement = document.querySelector('.content__swiper.swiper');

  if(swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        1440: {
          slidesPerView: 1.3,
        },
      }
    });
  }
}

