//* expanding blocks - smooth scroll:
export function expandElement(
  expandButton,
  expandBlock,
  activeButtonClass,
  activeBlockClass,
  scrollOption = false,
  scrollerContainer = false,
) {
  const w = window;
  const e = document.documentElement;
  const b = document.getElementsByTagName('body')[0];
  const x = w.innerWidth || e.clientWidth || b.clientWidth;

  if (document.querySelector(`.${expandButton}`) && document.querySelector(`.${expandBlock}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    const blocks = document.querySelectorAll(`.${expandBlock}`);

    blocks.forEach((block) => {
      block.style.maxHeight = '0px';
      block.style.display = 'none';
    });

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const expandable = document.getElementById(`${button.dataset.target}`);

        if (expandable.style.maxHeight === '0px') {
          buttons.forEach((button) => {
            button.classList.remove(`${activeButtonClass}`);
          });
          button.classList.add(`${activeButtonClass}`);

          blocks.forEach((block) => {
            block.style.display = 'none';
            block.style.maxHeight = '0px';
            block.classList.remove(`${activeBlockClass}`);
          });

          expandable.style.display = 'block';
          expandable.style.maxHeight = expandable.scrollHeight + 'px';
          setTimeout(() => {
            expandable.classList.add(`${activeBlockClass}`);
          }, 10);

          /* SMOOTH SCROLL TO BLOCK START */
          if (scrollOption !== false) {
            if (document.getElementById(`${button.dataset.target}`)) {
              let topOffset = 0;
              setTimeout(() => {
                const elementToScroll = document.getElementById(`${button.dataset.target}`);
                const elementPosition = elementToScroll.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                if (scrollerContainer !== false) {
                  const scrollerBox = document.querySelector(`.${scrollerContainer}`);
                  scrollerBox.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                } else {
                  const scrollerBox = window;
                  scrollerBox.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                }
              }, 100);
            }
          }
        } else {
          buttons.forEach((button) => {
            button.classList.remove(`${activeButtonClass}`);
          });
          blocks.forEach((block) => {
            block.style.maxHeight = '0px';
            block.classList.remove(`${activeBlockClass}`);
            setTimeout(() => {
              block.style.display = 'none';
            }, 300);
          });
          setTimeout(() => {
            expandable.style.display = 'none';
          }, 300);
        }
        clearTimeout();
      });
    });
  }
}

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { expandElement } from './libs/expandElement';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  expandElement(
    'expandButton',
    'expandBlock',
    'activeButton',
    'activeBlock',
    true,
    'scrollerContainer',
  );
});
*/
