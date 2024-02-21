//* Block "open/close" with smooth scroll to the top of the target
export function smoothShowBlock(
  expandButton,
  expandBlock,
  activatedButtonClass,
  activatedBlockClass,
  deactivatedBlockClass,
) {
  if (document.querySelector(`.${expandButton}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    const blocks = document.querySelectorAll(`.${expandBlock}`);

    blocks.forEach((block) => {
      block.style.maxHeight = '0px';
      block.style.display = 'none';
      block.classList.remove(`${activatedBlockClass}`);
    });

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();

        if (document.querySelector(`.${button.dataset.target}`)) {
          const targetBlocks = document.querySelectorAll(`.${button.dataset.target}`);

          targetBlocks.forEach((targetBlock) => {
            if (targetBlock.style.maxHeight == '0px') {
              targetBlock.style.display = 'block';
              targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
              button.classList.add(`${activatedButtonClass}`);
              targetBlock.classList.remove(`${deactivatedBlockClass}`);
              targetBlock.classList.add(`${activatedBlockClass}`);

              setTimeout(() => {
                const topOffset = 0;
                const elementPosition = targetBlock.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
                clearTimeout();
              }, 100);
            } else {
              targetBlock.style.maxHeight = '0px';
              button.classList.remove(`${activatedButtonClass}`);
              targetBlock.classList.remove(`${activatedBlockClass}`);
              targetBlock.classList.add(`${deactivatedBlockClass}`);
              setTimeout(() => {
                targetBlock.style.display = 'none';
                clearTimeout();
              }, 400);
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
  @-webkit-keyframes fade-out {
    0% { opacity: 1; }
    20% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes fade-out {
    0% { opacity: 1; }
    20% { opacity: 1; }
    100% { opacity: 0; }
  }

  .expandBlock {
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.4s linear;
  }
  .activatedBlockClass {
    -webkit-animation: fade-in 0.4s ease-out forwards;
    animation: fade-in 0.4s ease-out forwards;
  }
  .deactivatedBlockClass {
    -webkit-animation: fade-out 0.8s ease-out forwards;
    animation: fade-out 0.8s ease-out forwards;
  }
  .activatedButtonClass {
    background-color: rgba(255, 255, 255, 0.9);
  }
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
  import { smoothShowBlock } from './libs/smoothShowBlock';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    smoothShowBlock(
      'expandButton',
      'expandBlock',
      'activatedButtonClass',
      'activatedBlockClass',
      'deactivatedBlockClass',
    );
  });
*/
