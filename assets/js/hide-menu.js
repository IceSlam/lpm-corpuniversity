
(function() {
  'use strict';

  var goTopBtn = document.querySelector('.is-mobile');
  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('out');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('out');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 100) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
    }
  }
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
