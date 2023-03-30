//* Google Analytics Events
export function gaScripts(btnAttribute) {
  if (document.querySelector(`[data-analytics="${btnAttribute}"]`)) {
    const projectName = `${document.querySelector('meta[name="projectName"]').content}`;
    document.querySelectorAll(`[data-analytics="${btnAttribute}"]`).forEach((btn) => {
      btn.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        ga(`${projectName}.send`, `event`, `button`, `click`, `${btn.dataset.label}`);
        // eslint-disable-next-line no-undef
        gtag(`event`, `button-click`, { button: `${btn.dataset.label}` });

        console.log(`event`, `button-click`, { button: `${btn.dataset.label}` });
      });
    });
  }
}
