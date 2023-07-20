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
        const expandable = document.querySelector(`.${button.dataset.target}`);

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
            if (document.querySelector(`.${button.dataset.target}`)) {
              let compStylesProperty = window
                .getComputedStyle(expandable)
                .getPropertyValue('margin-top');
              let topOffset = Math.round(Number(compStylesProperty.replace('px', '')));

              setTimeout(() => {
                const elementToScroll = document.querySelector(`.${button.dataset.target}`);
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

                clearTimeout();
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

              clearTimeout();
            }, 300);
          });
          setTimeout(() => {
            expandable.style.display = 'none';

            clearTimeout();
          }, 300);
        }
      });
    });
  }
}

//! html structure - copy templates to your document:
//* HTML
/* 
  <button
    class="expandButton"
    data-target="targetBlock1"
    data-label="Button_1"
  >
    <p>Click</p>
  </button>

  <div class="expandBlock targetBlock1">
    <div class="content">
      <h2>CONTENT</h2>
    </div>
  </div>
*/

//! SCSS styles - copy to main.scss
//* SCSS
/* 
  @-webkit-keyframes fade-in {
    0% { opacity: 0; }
    20% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-in {
    0% { opacity: 0; }
    20% { opacity: 0; }
    100% { opacity: 1; }
  }

  .expandBlock {
    opacity: 0;
  }
  .activeBlockClass {
    -webkit-animation: fade-in 0.4s ease-out forwards;
    animation: fade-in 0.4s ease-out forwards;
  }
  .activeButtonClass {
    background-color: rgba(255, 255, 255, 0.9);
  }
*/

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
