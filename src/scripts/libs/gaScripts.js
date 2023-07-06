//* Google Analytics Events
export function gaScripts(btnAttribute) {
  if (document.querySelector(`[data-analytics="${btnAttribute}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttribute}"]`).forEach((btn) => {
      btn.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        gtag(`event`, `button-click`, { button: `${btn.dataset.label}` });
      });
    });
  }
}

//! html structure - copy templates to your document:
//* click on elements:
/* 
  <button
    data-label="Button_1"
    data-analytics="gaScripts"
  >
    Button_1
  </button>

  <a href="#"
    data-label="Button_2"
    data-analytics="gaScripts"
  >
    Button_2
  </a>
*/
