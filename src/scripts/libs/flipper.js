//* flipping cards:

//* onClick:
export function flipCards(flipperClass, activeClass) {
  if (document.querySelector(`.${flipperClass}`)) {
    const flippers = document.querySelectorAll(`.${flipperClass}`);
    for (let flipper of flippers) {
      flipper.addEventListener('click', () => {
        flipper.classList.toggle(`${activeClass}`);
      });
    }
  }
}

//* onHover:
/* 
const w = window;
const e = document.documentElement;
const b = document.getElementsByTagName('body')[0];
const x = w.innerWidth || e.clientWidth || b.clientWidth;
const isTablet =
  /^iP/.test(navigator.userAgent) ||
  (/^Mac/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

export function flipCards(flipperClass, activeClass) {
  if (document.querySelector(`.${flipperClass}`)) {
    const flippers = document.querySelectorAll(`.${flipperClass}`);

    //? Check if desktop, then action onHover, otherwise - onClick:
    if (x <= 768 || isTablet) {
      for (let flipper of flippers) {
        flipper.addEventListener('click', () => {
          flipper.classList.toggle(`${activeClass}`);
        });
      }
    } else {
      for (let flipper of flippers) {
        flipper.parentNode.addEventListener('mouseover', () => {
          flipper.classList.add(`${activeClass}`);

          flipper.addEventListener(
            'animationend',
            () => {
              flipper.classList.add(`${activeClass}`);
            },
            { once: true },
          );
        });
        flipper.parentNode.addEventListener('mouseleave', () => {
          flipper.classList.remove(`${activeClass}`);

          flipper.addEventListener(
            'animationend',
            () => {
              flipper.classList.remove(`${activeClass}`);
            },
            { once: true },
          );
        });
      }
    }
  }
}
 */

//! html structure - copy templates to your document:
//* FLIPCARDS:
/* 
<div class="flipper">
  <div
    class="flipper__card flipper__card1 flipperCard"
    data-label="flipper_card_1"
  >
    <div class="flipper__card_front">
      <img class="picture" src="" alt="picture" />  
      <h4 class="title">Front Title #1</h4>
    </div>
    <div class="flipper__card_back">
      <h4 class="title">Back Title #1</h4>
    </div>
  </div>
  <div
    class="flipper__card flipper__card2 flipperCard"
    data-label="flipper_card_2"
  >
    <div class="flipper__card_front">
      <img class="picture" src="" alt="picture" />  
      <h4 class="title">Front Title #2</h4>
    </div>
    <div class="flipper__card_back">
      <h4 class="title">Back Title #2</h4>
    </div>
  </div>
</div>
*/

//! SCSS styles for flipCards - copy to main.scss
/* 
.flipper {
  perspective: 3000;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;

  &__card {
    cursor: pointer;
    position: relative;
    perspective: 3000;
    transform-style: preserve-3d;
    transition: 0.4s linear;
    max-height: 100%;
    @include adapt(min-height, 210, 370);
    .picture {
      transform: scale(1);
      transition: all 0.15s ease-in;
    }
    &:hover {
      .picture {
        transform: scale(1.04);
        transition: all 0.15s ease-in;
      }
    }

    &_front,
    &_back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      overflow: hidden;
      @include adapt(padding, 16, 40);
    }
    &_front,
    &_back {
      z-index: 2;
      transform: rotateY(0deg);
      transition: all 0.3s ease;
    }
    &_back {
      transform: rotateY(-180deg);
    }
  }
}

._rotate {
  transform: rotateY(-180deg);
}
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { flipCards } from './libs/flipper';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  flipCards('flipperCard', '_rotate');
});
*/
