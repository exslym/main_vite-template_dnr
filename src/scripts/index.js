import '../styles/index.scss';
import { gaScripts } from './libs/gaScripts';
import { smoothScroll } from './libs/smoothScroll';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  $('.jquery_main').text('main page - jQuery is working');
  $('.jquery_page1').text('page1 - jQuery is working');

  /* for Google Analytics */
  gaScripts('gaScripts');

  /* for smooth scroll to element by clicking the button */
  smoothScroll('scrollButton');
});
