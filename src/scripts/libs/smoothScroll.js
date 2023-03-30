//* Smooth navigation scroll
export function smoothScroll(anchorClass) {
  if (document.querySelector(`.${anchorClass}`)) {
    document.querySelectorAll(`.${anchorClass}`).forEach((link) => {
      link.addEventListener('click', (e) => {
        switch (true) {
          //* for tags e.g. <a href="#block"></a>
          case link.hasAttribute('href'):
            if (document.getElementById(link.getAttribute('href').substring(1))) {
              e.preventDefault();
              const href = link.getAttribute('href').substring(1);
              const scrollTarget = document.getElementById(href);
              scrollToTaarget(scrollTarget);
            }
            break;

          //* for tags e.g. <button data-target="element"></button>
          case link.hasAttribute('data-target'):
            if (document.getElementById(link.dataset.target)) {
              e.preventDefault();
              const targetElement = link.dataset.target;
              const scrollTarget = document.getElementById(targetElement);
              scrollToTaarget(scrollTarget);
            }
            break;
        }
      });
    });
  }
}

function scrollToTaarget(scrollTarget) {
  //! если не нужен отступ сверху:
  // const topOffset = 0;
  //! если есть fixed:
  // document.querySelector('.scrollto').offsetHeight;

  const topOffset = 0;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
