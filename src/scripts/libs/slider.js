//* Slider (carousel):
export function slider(slideBlock, prevButton, nextButton) {
  if (document.querySelector(`.${slideBlock}`)) {
    $(function () {
      let carousel = $(`.${slideBlock}`);
      carousel.owlCarousel({
        startPosition: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: false,
        autoplayHoverPause: false,
        items: 1,
        margin: 20,
        smartSpeed: 800,
        autoHeight: true,
        loop: true,
        nav: false,
        dotsContainer: false,
        dots: false,
      });
      $(`.${nextButton}`).click(function () {
        carousel.trigger('next.owl.carousel');
      });
      $(`.${prevButton}`).click(function () {
        carousel.trigger('prev.owl.carousel');
      });
    });
  }
}
