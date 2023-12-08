//* Slider (owl-carousel):
export function slider(slideBlock, prevButton, nextButton) {
  if (document.querySelector(`.${slideBlock}`)) {
    $(function () {
      let carousel = $(`.${slideBlock}`);
      carousel.owlCarousel({
        startPosition: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: false,
        autoplayHoverPause: false,
        items: 1,
        margin: 20,
        smartSpeed: 800,
        autoHeight: true,
        loop: true,
        nav: false,
        dotsContainer: false,
        dots: false,
      });
      $(`.${nextButton}`).click(function () {
        carousel.trigger('next.owl.carousel');
      });
      $(`.${prevButton}`).click(function () {
        carousel.trigger('prev.owl.carousel');
      });
    });
  }
}

//! HTML structure - copy templates to your document:
//* HTML:
/* 
  <div class="slider-wrapper">
    <div class="slider slideBlock owl-carousel">
      <div class="item item1">
        <h2>SLIDE_1</h2>
      </div>
      <div class="item item2">
        <h2>SLIDE_2</h2>
      </div>
      <div class="item item3">
        <h2>SLIDE_3</h2>
      </div>
    </div>

    <div class="slider-buttons">
      <button
        class="slider-button prevButton"
        data-label="slider_prev"
      >
        &#8592;
      </button>

      <button
        class="slider-button nextButton"
        data-label="slider_next"
      >
        &#8594;
      </button>
    </div>
  </div>
*/

//! SCSS styles - @import url('../assets/tools/owl.carousel.min.css'); to index.scss

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
  import { slider } from './libs/slider';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    slider('slideBlock', 'prevButton', 'nextButton');
  });
*/
