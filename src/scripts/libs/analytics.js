//* Google Analytics + Yandex Metrika Button Click Events
export function analytics(btnAttribute) {
  const pageTitleGA = `${document.querySelector('meta[name="pageTitleGAEvents"]').content}`;

  if (document.querySelector(`[data-analytics="${btnAttribute}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttribute}"]`).forEach((btn) => {
      btn.addEventListener('click', () => {
        const eventName = `Buttons_${pageTitleGA}`;
        const property = `Buttons_${pageTitleGA}`;
        const label = btn.dataset.label;
        let eventProperty = new Object();
        eventProperty = { [property]: label };

        /* GA4 */
        if (typeof gtag === 'function') {
          // eslint-disable-next-line no-undef
          gtag('event', eventName, eventProperty);
          // console.log(`${eventName}`, eventProperty);
        } else {
          console.log(
            '⛔️ Please define the Google Analytics function in the head tag of html file, function is NOT defined',
          );
        }

        /* YM */
        if (typeof ym === 'function') {
          // eslint-disable-next-line no-undef
          sendYM(label);
          // console.log(label);
        } else {
          console.log(
            '⛔️ Please define the Yandex Metrika function in the head tag of html file, function is NOT defined',
          );
        }
      });
    });
  }
}

//! HTML structure - copy templates to your document:
//* HTML - click on elements:
/* 
  <button
    data-label="Button_1"
    data-analytics="analytics"
  >
    Button_1
  </button>

  <a href="#"
    data-label="Button_2"
    data-analytics="analytics"
  >
    Button_2
  </a>
*/

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
  import { analytics } from './libs/analytics';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    analytics('analytics');
  });
*/
