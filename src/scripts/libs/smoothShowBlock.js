//* Block "open/close" with smooth scroll to the top of the target
export function smoothShowBlock(expandButton, expandBlock, activeButtonClass, activeBlockClass) {
  if (document.querySelector(`.${expandButton}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    const blocks = document.querySelectorAll(`.${expandBlock}`);

    blocks.forEach((block) => {
      block.style.maxHeight = '0px';
      block.style.display = 'none';
      block.classList.remove(`${activeBlockClass}`);
    });

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        button.classList.add(`${activeButtonClass}`);

        if (document.querySelector(`.${button.dataset.target}`)) {
          const targetBlocks = document.querySelectorAll(`.${button.dataset.target}`);

          targetBlocks.forEach((targetBlock) => {
            if (targetBlock.style.maxHeight == '0px') {
              targetBlock.style.display = 'block';
              targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
              setTimeout(() => {
                targetBlock.classList.add(`${activeBlockClass}`);
              }, 10);

              setTimeout(() => {
                const topOffset = 0;
                const elementPosition = targetBlock.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }, 100);
            } else {
              targetBlock.style.maxHeight = '0px';
              targetBlock.classList.remove(`${activeBlockClass}`);
              button.classList.remove(`${activeButtonClass}`);
              setTimeout(() => {
                targetBlock.style.display = 'none';
              }, 200);
            }
          });
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
  import { smoothShowBlock } from './libs/smoothShowBlock';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    smoothShowBlock('expandButton', 'expandBlock', 'activeButtonClass', 'activeBlockClass');
  });
*/
