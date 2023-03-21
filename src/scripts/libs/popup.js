//* for popup (magnificPopup):
export function popup(popupClass) {
  if (document.querySelector(`.${popupClass}`)) {
    let scrollPosition;
    $(`.${popupClass}`).magnificPopup({
      /* Фикс для корректного открытия popup (отключаем скроллинг сайта на фоне popup) и возврата на текущее расположение на странице после закрытия popup: */
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      callbacks: {
        beforeOpen: () => {
          scrollPosition = $(window).scrollTop();
          $('html').addClass('mfp-helper');
        },
        close: () => {
          $('html').removeClass('mfp-helper');
          $(window).scrollTop(scrollPosition);
        },
      },
    });
  }

  /* //! add this class to .scss file:
			html.mfp-helper {
				body {
					overflow: hidden;
					.wrapper {
						display: none;
						visibility: hidden !important;
						-webkit-overflow-scrolling: none;
					}
				}
			}
	*/
}
