export function teamSlider() {
  const swiperElement = document.querySelector('.team__wrapper.swiper');
  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 3,
      spaceBetween: 23,
      pagination: {
        el: '.team__pagination.swiper-pagination',
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
      navigation: {
        nextEl: ".team__button.swiper-button-next",
        prevEl: ".team__button.swiper-button-prev",
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,

        },
        "@1.00": {
          slidesPerView: 3,
        },
        "@1.50": {
          slidesPerView: 4,
        },
      }
    });
  }
}

