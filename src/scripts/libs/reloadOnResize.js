//* принудительное обновление страницы при ресайзе окна браузера (vanila JS):
const addEvent = function (object, type, callback) {
  if (object == null || typeof object == 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent('on' + type, callback);
  } else {
    object['on' + type] = callback;
  }
};
addEvent(window, 'resize', () => {
  window.location.reload();
});
