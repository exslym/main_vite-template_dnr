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

  /* //! add this button under the image needed to zoom at .html file:
    <div class="button_zoom">
      <a href="#graph1" class="button_plus popup" onclick="event.stopPropagation()">
        <p>+ приблизить</p>
      </a>
    </div>
  */

  /* //! add this block before the body closing tag at .html file:
    <div class="hidden">
      <div id="graph1">
        <div class="mob-scroll">
          <img src="./assets/images/graph1.svg" alt="graph" />
        </div>
      </div>
    </div>
  */

  /* //! add these classes to .scss file:
      html.mfp-helper {
				body {
					overflow: hidden;
					.wrapper {
						display: none;
						visibility: hidden !important;
						-webkit-overflow-scrolling: none;
					}
				}
			}

      .mob-scroll {
        overflow-x: auto;
        &::-webkit-scrollbar {
          height: 12px;
          border-radius: 20px;
        }
        &::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 20px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          border: solid 2px transparent;
          border-top-width: 2px;
          border-bottom-width: 2px;
          border-left-width: 2px;
          border-right-width: 2px;
          box-sizing: border-box;
          background-clip: content-box;
          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }

      .button_zoom {
        display: none;
        width: 100%;
        @media screen and (max-width: 500px) {
          display: block;
        }
      }
      .button_plus {
        cursor: pointer;
        padding: 0;
        margin: 0;
        margin: 20px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        max-width: 140px;
        background-color: green;
        border-radius: 10px;
        p {
          font-size: 14px;
          color: black;
        }
      }

      .mfp-container {
        padding: 0 10px;
      }
      .mfp-content {
        .mfp-close {
          @include adapt(width, 40, 50, 600);
          @include adapt(height, 40, 50, 600);
          @include adapt(font-size, 36, 48, 600);
          color: black;
        }
      }

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
}
