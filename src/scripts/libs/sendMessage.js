export function sendMessage(btnAttribute) {
  if (window.location.origin.includes('doktornarabote')) {
    if (document.querySelector(`[data-message="${btnAttribute}"]`)) {
      document.querySelectorAll(`[data-message="${btnAttribute}"]`).forEach((btn) => {
        btn.addEventListener('click', () => {
          const buttonLabel = `${btn.dataset.label}`;

          window.parent.postMessage({ buttonName: buttonLabel }, '*');
        });
      });
    }
  }
}

//! HTML structure - copy templates to your document:
//* HTML:
/* 
<button
	data-message="message"
	data-label="Button1"
	>
		Button1
</button>
*/

//! SCRIPTS - add module to your project and import it in the index.js
//* SCRIPTS:
/* 
  import { sendMessage } from './libs/sendMessage';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    sendMessage('message');
  });
*/
