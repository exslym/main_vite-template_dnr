export function scrollTracker() {
  let supportOffset = window.pageYOffset !== undefined;
  let lastKnownPos = 0;
  let ticking = false;
  let scrollDir;

  // const height = Math.max(
  // 	document.documentElement.clientHeight,
  // 	document.documentElement.scrollHeight,
  // 	document.documentElement.offsetHeight,
  // 	document.body.scrollHeight,
  // 	document.body.offsetHeight,
  // );
  const height = Math.max(document.body.clientHeight);

  function callback(scrollPos, scrollDir) {
    // Your code here...
    let scrolledScreen = scrollPos + document.documentElement.clientHeight;
    let percentage = Math.round((scrolledScreen / height) * 100);
    console.log(
      `height: ${height} | scrolled-px: ${scrolledScreen} | scrolled-%: ${percentage} | direction: ${scrollDir}`,
    );
  }

  window.addEventListener('wheel', () => {
    const currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
    scrollDir = lastKnownPos > currYPos || currYPos === 0 ? 'up' : 'down';
    lastKnownPos = currYPos;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(lastKnownPos, scrollDir);
        ticking = false;
      });
    }
    ticking = true;
  });
}
