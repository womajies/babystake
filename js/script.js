document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    if(burger.classList.contains('burger_active')) {
      burger.classList.remove('burger_active', 'fill-white');
      menu.classList.add('hidden');
      body.classList.remove('overflow-y-hidden');
    } else {
      burger.classList.add('burger_active', 'fill-white');
      menu.classList.remove('hidden');
      if (window.matchMedia("(max-width: 1024px)").matches) {
        body.classList.add('overflow-y-hidden');
      }
    }
  });

  // swiper
  const swiperLogo = new Swiper('.swiper-logo', {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // swiper
  const swiperLinks = new Swiper('.swiper-links', {
    loop: true,
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});