//* Smooth navigation scroll
export function smoothScroll(anchorClass) {
  if (document.querySelector(`.${anchorClass}`)) {
    document.querySelectorAll(`.${anchorClass}`).forEach((link) => {
      link.addEventListener('click', (e) => {
        switch (true) {
          //* for tags e.g. <a href="#block"></a>
          case link.hasAttribute('href') && !link.hasAttribute('data-scroll'):
            if (document.querySelector(`#${link.getAttribute('href').substring(1)}`)) {
              e.preventDefault();
              const href = link.getAttribute('href').substring(1);
              const scrollTarget = document.querySelector(`#${href}`);
              scrollToTarget(scrollTarget);
            }
            break;
          //* for tags e.g. <a href="#block" data-scroll="scrollTo"></a>
          case link.hasAttribute('href') && link.hasAttribute('data-scroll'):
            if (document.querySelector(`.${link.dataset.scroll}`)) {
              e.preventDefault();
              const targetElement = link.dataset.scroll;
              const scrollTarget = document.querySelector(`.${targetElement}`);
              scrollToTarget(scrollTarget);
            }
            break;

          //* for tags e.g. <button data-target="element"></button>
          case link.hasAttribute('data-target') && !link.hasAttribute('data-scroll'):
            if (document.querySelector(`#${link.dataset.target}`)) {
              e.preventDefault();
              const targetElement = link.dataset.target;
              const scrollTarget = document.querySelector(`#${targetElement}`);
              scrollToTarget(scrollTarget);
            }
            break;
          //* for tags e.g. <button data-target="element" data-scroll="scrollTo"></button>
          case link.hasAttribute('data-target') && link.hasAttribute('data-scroll'):
            if (document.querySelector(`.${link.dataset.scroll}`)) {
              e.preventDefault();
              const targetElement = link.dataset.scroll;
              const scrollTarget = document.querySelector(`.${targetElement}`);
              scrollToTarget(scrollTarget);
            }
            break;
        }
      });
    });
  }
}

function scrollToTarget(scrollTarget) {
  const topOffset = 20;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

//! html structure - copy templates to your document:
//* LINKS:
/* 
  <a
    href="#element"
    class="scrollButton1"
    data-scroll="scrollTo"
  >
    Link to element
  </a>

  <button
    class="scrollButton2"
    data-target="element"
    data-scroll="scrollTo"
  >
    Link to element
  </button>
  ---
  ---
  <div class="scrollTo" id="element">
    element
  </div>
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { smoothScroll } from './libs/smoothScroll';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  smoothScroll('scrollButton1');
  smoothScroll('scrollButton2');
});
*/
