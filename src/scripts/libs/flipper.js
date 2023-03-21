//* flipping cards:
export function flipCards(flipperClass, activeClass) {
  if (document.querySelector(`.${flipperClass}`)) {
    const flippers = document.querySelectorAll(`.${flipperClass}`);
    for (let flipper of flippers) {
      flipper.addEventListener('click', () => {
        flipper.classList.toggle(`${activeClass}`);
      });
    }
  }
}
