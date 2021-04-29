/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll('section');
const navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function createNavbar(sec) {
  const fragment = document.createDocumentFragment();
  navbar.classList = 'navbar__menu';
  for (let item of sec) {
    const navbarItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.innerText = item.dataset?.nav;
    anchor.href = '#' + item.id;
    anchor.classList = 'menu__link';
    navbarItem.appendChild(anchor);
    fragment.appendChild(navbarItem);
  }
  navbar.appendChild(fragment);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
createNavbar(sections);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
navbar.addEventListener('click', function (e) {
  if (e.target.nodeName === 'A') {
    const oldActive = document.querySelector('.your-active-class');
    const newActive = document.getElementById(e.target.href.split('#')[1]);
    oldActive?.classList.remove('your-active-class');
    newActive?.classList.add('your-active-class');
  }
});
