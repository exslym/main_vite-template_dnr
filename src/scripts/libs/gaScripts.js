//* Google Analytics Button Click Events
export function gaScripts(btnAttribute) {
  const pageTitleGA = `${document.querySelector('meta[name="pageTitleGAEvents"]').content}`;

  if (document.querySelector(`[data-analytics="${btnAttribute}"]`)) {
    document.querySelectorAll(`[data-analytics="${btnAttribute}"]`).forEach((btn) => {
      btn.addEventListener('click', () => {
        const eventName = `Buttons_${pageTitleGA}`;
        const property = `Buttons_${pageTitleGA}`;
        const label = `${btn.dataset.label}`;
        let eventProperty = new Object();
        eventProperty = { [property]: label };

        if (typeof gtag === 'function') {
          // eslint-disable-next-line no-undef
          gtag(`event`, eventName, eventProperty);
          // console.log(`event`, eventName, eventProperty);
        } else {
          console.log(
            '⛔️ Please define the gtag function in the head tag of html file, function is NOT defined',
          );
        }
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
