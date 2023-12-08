//* for popup (magnificPopup):
export function popup(popupClass) {
  if (document.querySelector(`.${popupClass}`)) {
    let scrollPosition;
    $(`.${popupClass}`).magnificPopup({
      /* Фикс для корректного открытия popup (отключаем скроллинг сайта на фоне popup) и возврата на текущее расположение на странице после закрытия popup: */
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      callbacks: {
        beforeOpen: () => {
          scrollPosition = $(window).scrollTop();
          $('html').addClass('mfp-helper');
        },
        close: () => {
          $('html').removeClass('mfp-helper');
          $(window).scrollTop(scrollPosition);
        },
      },
    });
  }
}

//! html structure - add this button under the image <img> needed to zoom:
//* HTML:
/* 
  <img src="./assets/images/graph1.svg" alt="graph" />

  <div class="button_zoom">
    <a href="#graph1" class="button_plus popup" onclick="event.stopPropagation()">
      <p>+ приблизить</p>
    </a>
  </div>

  <div class="hidden">
    <div id="graph1">
      <div class="mob-scroll">
        <img src="./assets/images/graph1.svg" alt="graph" />
      </div>
    </div>
  </div>
*/

//! SCSS styles - @import url('../assets/tools/magnific-popup.css'); to index.scss
//! SCSS styles - copy to main.scss
//* SCSS
/* 
  #graph1 {
    position: relative;
    padding: 45px 16px 10px;
    background: white;
    border-radius: 20px;
    img {
      min-width: 768px;
      width: 100%;
      padding-bottom: 24px;
    }
  }

  .hidden {
    display: none;
  }
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
    import { popup } from './libs/popup';

    window.addEventListener('DOMContentLoaded', () => {
      'use strict';

      popup('popup');
    });
  */
