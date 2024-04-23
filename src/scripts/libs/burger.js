//* Burger (menu):
export function burger(openBurger, openedClass, closedClass, mobileNavClass) {
  if (document.querySelector(`.${openBurger}`)) {
    const openBurgerButtons = document.querySelectorAll(`.${openBurger}`);
    openBurgerButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!button.classList.contains(openedClass)) {
          button.classList.remove(closedClass);
          button.classList.add(openedClass);
          button.parentNode.classList.add(mobileNavClass);
        } else {
          button.classList.remove(openedClass);
          button.classList.add(closedClass);
          button.parentNode.classList.remove(mobileNavClass);
        }
      });

      const crumbs = document.querySelectorAll(`.${button.dataset.crumbs}`);
      crumbs.forEach((crumb) => {
        crumb.addEventListener('click', () => {
          if (button.parentNode.classList.contains(mobileNavClass)) {
            button.classList.remove(openedClass);
            button.classList.add(closedClass);
            button.parentNode.classList.remove(mobileNavClass);
          }
        });
      });
    });
  }
}

//! html structure - copy templates to your document:
//* MENU:
/* 
<div class="menu-container">
	<div class="menu-burger openBurger" data-crumbs="crumb">
		<span></span>
	</div>
	<nav class="menu-desktop">
		<ul class="crumbs">
			<li>
				<a
					href="#"
					class="crumb crumb1"
					data-label="item1"
				>
					<p>item-1</p>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="crumb crumb2"
					data-label="item2"
				>
					<p>item-2</p>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="crumb crumb3"
					data-label="item3"
				>
					<p>item-3</p>
				</a>
			</li>
		</ul>
	</nav>
</div>
*/

//! scripts - add module to your project and import it in the index.js
//* SCRIPTS:
/*
import { burger } from './libs/burger';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  burger('openBurger', 'openedMenu', 'closedMenu', 'mobileNav');
});
*/

//! styles structure - copy _burger.scss module to your project (./styles/modules/) and import it in the index.scss
