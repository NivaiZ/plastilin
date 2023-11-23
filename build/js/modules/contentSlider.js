export function contentSlider() {
  const swiperElement = document.querySelector('.content__swiper.swiper');

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 1,
      navigation: {
        nextEl: ".content__button.swiper-button-next",
        prevEl: ".content__button.swiper-button-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const progress = `<div class="swiper-pagination__progress" style="--pagination-progress: ${Math.floor((current / total) * 100)}%"></div>`

          const fraction = `<div class="swiper-pagination__fraction">
            <span class="swiper-pagination__fraction-current">${current}</span>
            <span class="swiper-pagination__fraction-separator">/</span>
            <span class="swiper-pagination__fraction-total">${total}</span>
          </div>`

          return progress + fraction;
        }
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
      }
    });
  }
}

