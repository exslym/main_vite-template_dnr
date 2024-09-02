//* Slider (owl-carousel):
export function slider1(slider, prevButton, nextButton, dotsBox, startBlock = 1) {
  if (document.querySelector(`.${slider}`)) {
    $(commonSlider(slider, prevButton, nextButton, dotsBox, startBlock));
  }
}
export function slider2(slider, prevButton, nextButton, dotsBox, startBlock = 1) {
  if (document.querySelector(`.${slider}`)) {
    $(commonSlider(slider, prevButton, nextButton, dotsBox, startBlock));
  }
}

function commonSlider(slider, prevButton, nextButton, dotsBox, startBlock) {
  let carousel = $(`.${slider}`);

  carousel.owlCarousel({
    startPosition: startBlock - 1,
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
        margin: 10
      },
      600: {
        items: 3,
        margin: 10
      },
      801: {
        items: 4,
        margin: 16
      }
    }
  });

  // Activate next button
  $(`.${nextButton}`).click(function () {
    carousel.trigger('next.owl.carousel');
  });
  // Activate prev button
  $(`.${prevButton}`).click(function () {
    carousel.trigger('prev.owl.carousel');
  });
  // Activate click on dots (pagination)
  $(`.${dotsBox} .owl-dot`).click(function () {
    carousel.trigger('to.owl.carousel', [$(this).index(), 500]);
  });
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
        class="sliderButton prevButton prevButton1"
        data-label="slider_prev"
      >
        &#8592;
      </button>

      <button
        class="sliderButton nextButton nextButton1"
        data-label="slider_next"
      >
        &#8594;
      </button>
    </div>
    <div class="sliderDots sliderDots1"></div>
  </div>
  
  <div class="slider-wrapper">
    <div class="slider slider2 owl-carousel">
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
        class="sliderButton prevButton prevButton2"
        data-label="slider_prev"
      >
        &#8592;
      </button>

      <button
        class="sliderButton nextButton nextButton2"
        data-label="slider_next"
      >
        &#8594;
      </button>
    </div>
    <div class="sliderDots sliderDots2"></div>
  </div>
*/

//! SCSS styles - @import url('../assets/tools/owl.carousel.min.css'); to index.scss
//! SCSS styles - @import './modules/sliders'; to index.scss

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
  import { slider1, slider2 } from './libs/sliders';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //* sliders: started with 1st slide, change if needed:
    slider1('slider1', 'prevButton1', 'nextButton1', 'sliderDots1', 1);
    slider2('slider2', 'prevButton2', 'nextButton2', 'sliderDots2', 1);
*/
