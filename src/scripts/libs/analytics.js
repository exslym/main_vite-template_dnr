/* global sendGTAG, sendYM, gtag, ym */ //!DON'T DELETE THIS LINE!!!

//* Google Analytics + Yandex Metrika Button Click Events
export function analytics(btnAttribute) {
  const pageTitleGA = `${document.querySelector('meta[name="pageTitleGAEvents"]').content}`;

  if (document.querySelector(`[data-analytics="${btnAttribute}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttribute}"]`).forEach((btn) => {
      btn.addEventListener('click', () => {
        const eventName = `Buttons_${pageTitleGA}`;
        const property = `Buttons_${pageTitleGA}`;
        const label = btn.dataset.label;

        /* GA4 */
        if (typeof gtag === 'function') {
          sendGTAG(eventName, property, label);
        } else {
          console.log('analytics.js: gtag is NOT defined');
        }

        /* YM */
        if (typeof ym === 'function') {
          sendYM(label);
        } else {
          console.log('analytics.js: ym is NOT defined');
        }
      });
    });
  }
}

//! HTML structure - copy templates to your document:
//* HTML head:
/* 
  <!-- GOOGLE ANALYTICS SEND EVENTS FUNCTION -->
  <script type="text/javascript">
    const sendGTAG = (eventName, property, label) => {
      let eventProperty = new Object();
      eventProperty = { [property]: label };
      if (window.location.origin.includes('doktornarabote')) {
        if (typeof gtag === 'function') {
          gtag('event', eventName, eventProperty);
        } else {
          console.log(
            '⛔️ Please define the Google Analytics function in the head tag of html file, function is NOT defined',
          );
        }
      } else {
        console.log('GA: localhost', 'event', eventName, eventProperty);
      }
    };
  </script>

  <!-- YANDEX METRIKA SEND EVENTS FUNCTION -->
  <script type="text/javascript">
    const sendYM = (label) => {
      if (window.location.origin.includes('doktornarabote')) {
        if (typeof ym === 'function') {
          // здесь вместо YYYYYYYY - номер счетчика
          ym(YYYYYYYY, 'reachGoal', label);
        } else {
          console.log(
            '⛔️ Please define the Yandex Metrika function in the head tag of html file, function is NOT defined',
          );
        }
      } else {
        console.log('YM: localhost', 'reachGoal', label);
      }
    };
  </script>
*/

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
