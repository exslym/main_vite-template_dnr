//* Block "open/close on mobile devices" instead of tooltip on "hover on desktop"
export function smoothShowBlock(expandButton, expandBlock, activeClass) {
  if (document.querySelector(`.${expandButton}`)) {
    const buttons = document.querySelectorAll(`.${expandButton}`);
    const blocks = document.querySelectorAll(`.${expandBlock}`);

    blocks.forEach((block) => {
      block.style.maxHeight = '0px';
      block.style.display = 'none';
      block.classList.remove(`${activeClass}`);
    });

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        button.classList.add(`${activeClass}`);

        if (document.querySelector(`.${button.dataset.target}`)) {
          const targetBlocks = document.querySelectorAll(`.${button.dataset.target}`);

          targetBlocks.forEach((targetBlock) => {
            if (targetBlock.style.maxHeight == '0px') {
              targetBlock.style.display = 'block';
              setTimeout(() => {
                targetBlock.classList.add(`${activeClass}`);
                targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
              }, 10);

              setTimeout(() => {
                const topOffset = 0;
                const elementPosition = targetBlock.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }, 100);
            } else {
              targetBlock.style.maxHeight = '0px';
              targetBlock.classList.remove(`${activeClass}`);
              button.classList.remove(`${activeClass}`);
              setTimeout(() => {
                targetBlock.style.display = 'none';
              }, 200);
            }
          });
        }
      });
    });
  }
}
