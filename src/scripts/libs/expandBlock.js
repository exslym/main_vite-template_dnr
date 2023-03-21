//* Block "open/close
export function expandBlock(expandButton, activeClass) {
  if (document.querySelector(`.${expandButton}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!button.classList.contains(activeClass)) {
          button.classList.add(activeClass);
        } else {
          button.classList.remove(activeClass);
        }
      });
    });
  }
}
