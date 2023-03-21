//* Smooth navigation scroll
export function smoothScroll(anchorClass) {
  if (document.querySelector(`.${anchorClass}`)) {
    document.querySelectorAll(`.${anchorClass}`).forEach((link) => {
      link.addEventListener('click', function (e) {
        if (document.getElementById(link.getAttribute('href').substring(1))) {
          e.preventDefault();
          let href = link.getAttribute('href').substring(1);
          const scrollTarget = document.getElementById(href);
          const topOffset = 0;

          //! если не нужен отступ сверху:
          // const topOffset = 0;
          //! если есть fixed:
          // document.querySelector('.scrollto').offsetHeight;

          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }
}
