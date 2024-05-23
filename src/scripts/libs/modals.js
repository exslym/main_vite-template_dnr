export function modals(modalBlock, openModal, closeModal) {
  if (document.querySelector(`.${openModal}`) && document.querySelector(`.${modalBlock}`)) {
    const modals = document.querySelectorAll(`.${modalBlock}`);
    const openModalButtons = document.querySelectorAll(`.${openModal}`);
    const closeModalButtons = document.querySelectorAll(`.${closeModal}`);

    const w = window;
    const e = document.documentElement;
    const b = document.getElementsByTagName('body')[0];
    const x = w.innerWidth || e.clientWidth || b.clientWidth;

    const isMobileDevice =
      /^iP/.test(navigator.userAgent) ||
      (/^Mac/.test(navigator.userAgent) && navigator.maxTouchPoints > 1) ||
      x <= 1024;
    if (isMobileDevice) {
      modals.forEach((modal) => {
        modal.classList.add('noPadddingRight');
      });
    }
    /* MODAL opening */
    openModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const openingModal = document.querySelector(`#${button.dataset.target}`);
        document.querySelector('body').style.height = 'auto';
        /* Check if scrollbar is visible */
        if (document.body.clientHeight > window.innerHeight) {
          document.querySelector('html').classList.add('noScroll');
        } else {
          openingModal.style.padding = '1em';
        }

        openingModal.showModal();
        openingModal.scrollTop = 0;
        openingModal.addEventListener(
          'animationend',
          () => {
            openingModal.style.overflow = 'auto';
          },
          { once: true }
        );

        /* for longread modal */
        const longRead = openingModal.children[0].clientHeight > window.innerHeight;
        if (!isMobileDevice && longRead) {
          if (openingModal.open) {
            openingModal.style.paddingRight = '1em';
          }
          openingModal.addEventListener('animationend', () => {
            openingModal.style.paddingRight = '0';
          });
        }
      });
    });
    /* MODAL closing by button */
    closeModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const openedModal = document.querySelector(`#${button.dataset.target}`);
        document.querySelector('html').classList.remove('noScroll');
        openedModal.setAttribute('closing', '');
        openedModal.style.overflow = 'hidden';
        openedModal.addEventListener(
          'animationend',
          () => {
            openedModal.removeAttribute('closing');
            openedModal.close();
            openedModal.style.overflow = null;
          },
          { once: true }
        );

        /* for longread modal */
        const longRead = openedModal.children[0].clientHeight > window.innerHeight;
        if (!isMobileDevice && longRead) {
          openedModal.addEventListener('animationend', () => {
            openedModal.style.paddingRight = null;
          });
        }
      });
    });
    /* MODAL closing by clicking out of modal */
    modals.forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target.nodeName === 'DIALOG') {
          document.querySelector('html').classList.remove('noScroll');
          modal.setAttribute('closing', '');
          modal.style.overflow = 'hidden';
          modal.addEventListener(
            'animationend',
            () => {
              modal.removeAttribute('closing');
              modal.close();
              modal.style.overflow = null;
            },
            { once: true }
          );

          /* for longread modal */
          const longRead = modal.children[0].clientHeight > window.innerHeight;
          if (!isMobileDevice && longRead) {
            modal.addEventListener('animationend', () => {
              modal.style.paddingRight = null;
            });
          }
        }
      });
    });
  }
}

//! html structure - copy templates to your document:
//* BUTTONS:
/* 
	<button class="button openModal" data-label="Button_Modal1" data-target="modal1">
		<p>OPEN_MODAL_1</p>
	</button>
	<button class="button openModal" data-label="Button_Modal2" data-target="modal2">
		<p>OPEN_MODAL_2</p>
	</button>
*/

//* MODALS:
/* 
	<dialog class="modal modalBlock" id="modal1">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<div>MODAL_1_CONTENT</div>
				</div>
			</div>
			<img class="closeModal" data-target="modal1" src="./assets/images/close.svg" alt="close" />
		</div>
	</dialog>

	<dialog class="modal modalBlock" id="modal2">
		<div class="modal-container">
			<div class="modal-box">
				<div class="modal-content">
					<div>MODAL_2_CONTENT</div>
				</div>
			</div>
			<img class="closeModal" data-target="modal2" src="./assets/images/close.svg" alt="close" />
		</div>
	</dialog>
*/
//! styles structure - copy _modals.scss module to your project and import it in the index.scss

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
  import { modals } from './libs/modals';

  window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('modalBlock', 'openModal', 'closeModal');
  });
*/
