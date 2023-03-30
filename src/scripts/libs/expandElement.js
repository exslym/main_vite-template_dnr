//* expanding blocks - smooth scroll:
export function expandElement(
  expandButton,
  expandBlock,
  activeButton,
  activeBlock,
  scrollOption = false,
) {
  const w = window;
  const e = document.documentElement;
  const b = document.getElementsByTagName('body')[0];
  const x = w.innerWidth || e.clientWidth || b.clientWidth;

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
        const expandable = document.getElementById(`${e.target.dataset.target}`);

        if (expandable.style.maxHeight === '0px') {
          buttons.forEach((button) => {
            button.classList.remove(`${activeButton}`);
          });
          button.classList.add(`${activeButton}`);

          blocks.forEach((block) => {
            block.style.display = 'none';
            block.style.maxHeight = '0px';
            block.classList.remove(`${activeBlock}`);
          });

          expandable.style.display = 'block';
          expandable.style.maxHeight = expandable.scrollHeight + 'px';
          setTimeout(() => {
            expandable.classList.add(`${activeBlock}`);
          }, 10);

          /* SMOOTH SCROLL TO BLOCK START */
          if (scrollOption !== false) {
            if (document.getElementById(`${e.target.dataset.target}`)) {
              let topOffset = 0;
              setTimeout(() => {
                const targetElement = e.target.dataset.target;
                const scrollTarget = document.getElementById(targetElement);
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }, 100);
            }
          }
        } else {
          buttons.forEach((button) => {
            button.classList.remove(`${activeButton}`);
          });
          blocks.forEach((block) => {
            block.style.maxHeight = '0px';
            block.classList.remove(`${activeBlock}`);
            setTimeout(() => {
              block.style.display = 'none';
            }, 300);
          });
          setTimeout(() => {
            expandable.style.display = 'none';
          }, 300);
        }
        clearTimeout();
      });
    });
  }
}
