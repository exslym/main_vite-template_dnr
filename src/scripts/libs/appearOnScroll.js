//* ELEMENT APPEARS ON SCROLL
export function appearOnScroll(elementClass, activeClass) {
  const d = document.documentElement;
  const b = document.body;
  const st = 'scrollTop';
  const sh = 'scrollHeight';
  const width = window.innerWidth || d.clientWidth || b.clientWidth;

  const upButton = document.querySelector(`.${elementClass}`);

  if (document.querySelector(`.${elementClass}`)) {
    document.addEventListener('scroll', () => {
      let percent = ((d[st] || b[st]) / ((d[sh] || b[sh]) - d.clientHeight)) * 100;

      if (width > 600) {
        // if depence of width is needed
      }

      if (percent > 10) {
        upButton.classList.add(`${activeClass}`);
      } else {
        upButton.classList.remove(`${activeClass}`);
      }
    });
  }
}
