export function chosenSlider() {
  const swiperElement = document.querySelector('.chosen__slider.swiper');

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      spaceBetween: 112,
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
      navigation: {
        nextEl: ".chosen__button.swiper-button-next",
        prevEl: ".chosen__button.swiper-button-prev",
      },
      breakpoints: {
        1440: {
          slidesPerView: 2,
        },
      }
    });
  }
}
