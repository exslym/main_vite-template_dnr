export function elementAnimation(elementClass, animationClass) {
  if (document.querySelector(`.${elementClass}`)) {
    window.addEventListener('load', () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting }) => {
            const elements = document.querySelectorAll(`.${elementClass}`);
            if (isIntersecting) {
              elements.forEach((element) => {
                element.classList.add(`${animationClass}`);
              });
            }
          });
        },
        {
          threshold: 0.3,
        },
      );
      for (let element of document.querySelectorAll(`.${elementClass}`)) {
        observer.observe(element);
      }
    });
  }
}
