//* Slider (owl-carousel):
export function slider1(slider, prevButton1, nextButton1, dotsBox, startBlock1 = 1) {
  if (document.querySelector(`.${slider}`)) {
    $(function () {
      let carousel = $(`.${slider}`);

      carousel.owlCarousel({
        startPosition: startBlock1 - 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: false,
        autoplayHoverPause: false,
        items: 1,
        margin: 20,
        smartSpeed: 500,
        autoHeight: true,
        loop: true,
        nav: false,
        dotsContainer: `.${dotsBox}`,
        dots: true,
        responsive: {
          0: {
            items: 2,
            margin: 10,
          },
          600: {
            items: 3,
            margin: 10,
          },
          801: {
            items: 4,
            margin: 16,
          },
        },
      });

      // Activate next button
      $(`.${nextButton1}`).click(function () {
        carousel.trigger('next.owl.carousel');
      });
      // Activate prev button
      $(`.${prevButton1}`).click(function () {
        carousel.trigger('prev.owl.carousel');
      });
      // Activate click on dots (pagination)
      $(`.${dotsBox} .owl-dot`).click(function () {
        carousel.trigger('to.owl.carousel', [$(this).index(), 500]);
      });
    });
  }
}

//! HTML structure - copy templates to your document:
//* HTML:
/* 
  <div class="slider-wrapper">
    <div class="slider slider1 owl-carousel">
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

    <div class="sliderButtons">
      <button
        class="sliderButton prevButton1"
        data-label="slider_prev"
      >
        &#8592;
      </button>

      <button
        class="sliderButton nextButton1"
        data-label="slider_next"
      >
        &#8594;
      </button>
    </div>
    <div class="sliderDots sliderDots1"></div>
  </div>
*/

//! SCSS styles - @import url('../assets/tools/owl.carousel.min.css'); to index.scss
//! SCSS styles - @import './modules/sliders';

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
  import { slider1 } from './libs/sliders';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //* slider1 started with 1st slide, change if needed:
    slider1(slider, prevButton1, nextButton1, sliderDots1, 1);
*/
