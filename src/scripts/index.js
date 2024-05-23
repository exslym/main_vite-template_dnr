import '../styles/index.scss';
import { analytics } from './libs/analytics';
// import { analytics2YM } from './libs/analytics2YM';
import { burger } from './libs/burger';
import { smoothScroll } from './libs/smoothScroll';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* for jquery work check. Remove it! */
  $('.jquery_main').text('main page - jQuery is working');
  $('.jquery_page1').text('page1 - jQuery is working');

  /* for Google Analytics & Yandex Metrika */
  analytics('analytics');

  /* for 2 Yandex Metrika counters */
  // analytics2YM('analyticsYM1', 'analyticsYM2');

  /* for smooth scroll to element by clicking the button */
  smoothScroll('scrollButton');

  /* burger menu */
  burger('openBurger', 'openedMenu', 'closedMenu', 'mobileNav');
});
