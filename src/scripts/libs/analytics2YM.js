/* global sendGTAG, sendYM, gtag, ym */ //!DON'T DELETE THIS LINE!!!

//* Google Analytics + Yandex Metrika Button Click Events
export function analytics2YM(btnAttributeYM1, btnAttributeYM2) {
  const pageTitleGA = `${document.querySelector('meta[name="pageTitleGAEvents"]').content}`;

  //! здесь вместо 99999999 - номер первого счетчика Яндекс Метрики, вместо 33333333 - номер второго счетчика:
  const numYM1 = 99999999;
  const numYM2 = 33333333;

  // Для первого счетчика ЯМ
  if (document.querySelector(`[data-analytics="${btnAttributeYM1}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttributeYM1}"]`).forEach((btn) => {
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
          sendYM(`Buttons_${pageTitleGA}_${label}`, numYM1);
        } else {
          console.log('analytics.js: ym is NOT defined');
        }
      });
    });
  }

  // Для второго счетчика ЯМ
  if (document.querySelector(`[data-analytics="${btnAttributeYM2}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttributeYM2}"]`).forEach((btn) => {
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
          sendYM(`Buttons_${pageTitleGA}_${label}`, numYM2);
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
    const sendYM = (label, number) => {
      if (window.location.origin.includes('doktornarabote')) {
        if (typeof ym === 'function') {
          ym(number, 'reachGoal', label);
        } else {
          console.log(
            '⛔️ Please define the Yandex Metrika function in the head tag of html file, function is NOT defined'
          );
        }
      } else {
        console.log('YM: localhost', number, 'reachGoal', label);
      }
    };
  </script>
*/

//* HTML - click on elements:
/* 
  <button
    data-label="Button_1"
    data-analytics="analyticsYM1" // отправка на первый счетчик ЯМ
  >
    Button_1
  </button>

  <a href="#"
    data-label="Button_2"
    data-analytics="analyticsYM2" // отправка на второй счетчик ЯМ
  >
    Button_2
  </a>
*/

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
import { analytics2YM } from './libs/analytics2YM';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    analytics2YM('analyticsYM1', 'analyticsYM2');
  });
*/
