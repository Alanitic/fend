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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * Filters a NodeList of section to maake sure each element is going to be an item of navbar
 * @param {NodeList} sec NodeList of sections to be filtered.
 * @returns
 */
function filterSections(sec) {
  const filtered = [];
  for (let item of sec) {
    if (item.id.includes('section')) {
      filtered.push(item);
    }
  }
  return filtered;
}

function createNavbar(sec) {
  const parent = document.querySelector('#navbar__list');
  const fragment = document.createDocumentFragment();
  parent.classList = 'navbar__menu';
  for (let item of sec) {
    const navbarItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.innerText = item.dataset?.nav;
    anchor.classList = 'menu__link';
    navbarItem.appendChild(anchor);
    fragment.appendChild(navbarItem);
  }
  parent.appendChild(fragment);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const filtered = filterSections(sections);
createNavbar(filtered);

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
