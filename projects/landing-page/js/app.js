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
const scrollToTopButton = document.getElementById('top');
const rootElement = document.documentElement;

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

const showTopButton = function () {
  const y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
};

const scrollChangeSection = function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0.002) {
        document.querySelector(`nav li a[href="#${id}"]`).focus();
      }
    });
  });
  sections.forEach((section) => {
    observer.observe(section);
  });
};

const clickChangeSection = function (e) {
  e.preventDefault();
  if (e.target.nodeName === 'A') {
    const oldActiveSection = document.querySelector('.your-active-class');
    const newActiveSection = document.getElementById(
      e.target.href.split('#')[1]
    );
    oldActiveSection?.classList.remove('your-active-class');
    newActiveSection?.classList.add('your-active-class');
    const offsetTop = newActiveSection.offsetTop;
    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

const scrollToTop = function () {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

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
document.addEventListener('DOMContentLoaded', scrollChangeSection);

// Set sections as active
navbar.addEventListener('click', clickChangeSection);

// Button TOP
document.addEventListener('scroll', showTopButton);
scrollToTopButton.addEventListener('click', scrollToTop);
