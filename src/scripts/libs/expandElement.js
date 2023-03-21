//* expanding blocks - smooth scroll:
export function expandBlock(expandButton, expandBlock, activeClass, scrollOption = false) {
  if (document.querySelector(`.${expandButton}`) && document.querySelector(`.${expandBlock}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    const blocks = document.querySelectorAll(`.${expandBlock}`);

    blocks.forEach((block) => {
      block.style.maxHeight = '0px';
      block.style.display = 'none';
    });

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const expandable = document.querySelector(`#${e.target.dataset.label}`);
        if (expandable.style.maxHeight == '0px') {
          expandable.style.display = 'block';
          expandable.style.maxHeight = expandable.scrollHeight + 'px';
          setTimeout(() => {
            expandable.classList.add(`${activeClass}`);
          }, 10);

          /* SMOOTH SCROLL TO BLOCK START */
          if (scrollOption !== false) {
            if (document.getElementById(`${e.target.dataset.label}`)) {
              const topOffset = 0;
              const href = e.target.dataset.label;
              const scrollTarget = document.getElementById(href);
              const elementPosition = scrollTarget.getBoundingClientRect().top;
              const offsetPosition = elementPosition - topOffset;
              setTimeout(() => {
                window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }, 100);
            }
          }
        } else {
          expandable.classList.remove(`${activeClass}`);
          expandable.style.maxHeight = '0px';
          setTimeout(() => {
            expandable.style.display = 'none';
          }, 600);
        }
        clearTimeout();
      });
    });
  }
}
