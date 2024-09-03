export function elementAnimation(elementClass, animationClass) {
  if (document.querySelector(`.${elementClass}`)) {
    window.addEventListener('load', () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            const elements = document.querySelectorAll(`.${elementClass}`);
            if (isIntersecting) {
              elements.forEach((element) => element.classList.add(`${animationClass}`));
            }
          });
        },
        {
          threshold: 0.3
        }
      );
      for (let element of document.querySelectorAll(`.${elementClass}`)) {
        observer.observe(element);
      }
    });
  }
}

//! html structure - copy templates to your document:
//* HTML
/* 
  <div class="animatedBlock1">Block1</div>
  <div class="animatedBlock1">Block2</div>
  <div class="animatedBlock1">Block3</div>
  <div class="animatedBlock2" style="--i: 1">Block1</div>
  <div class="animatedBlock2" style="--i: 2">Block2</div>
  <div class="animatedBlock2" style="--i: 3">Block3</div>
*/

//! SCSS styles - copy to main.scss or look for the required animation in styles/additionals/_animations.scss
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

  .animatedBlock {
    opacity: 0;
  }

  ._animated1 {
    -webkit-animation: fade-in 0.8s ease-in forwards;
    animation: fade-in 0.8s ease-in forwards;
  }

  ._animated2 {
    -webkit-animation: fade-in 1.2s ease-in forwards;
    animation: fade-in 1.2s ease-in forwards;
    -webkit-animation-delay: calc(0.2s * var(--i));
    animation-delay: calc(0.2s * var(--i));
  }
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { elementAnimation } from './libs/animations';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    elementAnimation('animatedBlock1', '_animated1');
    elementAnimation('animatedBlock2', '_animated2');
  });
*/
