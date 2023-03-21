//* ELEMENT APPEARS ON SCROLL
export function appearOnScroll(elementClass, activeClass) {
  const h = document.documentElement;
  const b = document.body;
  const st = 'scrollTop';
  const sh = 'scrollHeight';
  const upButton = document.querySelector(`.${elementClass}`);

  if (document.querySelector(`.${elementClass}`)) {
    document.addEventListener('scroll', () => {
      let scrollTop = h[st] || b[st];
      let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

      if (percent > 10) {
        upButton.classList.add(`${activeClass}`);
      } else {
        upButton.classList.remove(`${activeClass}`);
      }
    });
  }
}
