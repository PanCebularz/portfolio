'use strict';

import activeNavbarPage from './scripts/activeNavbarPage.js';
import stickyNavbar from './scripts/stickyNavbar.js';
import animatedCursor from './scripts/animatedCursor.js';
import contactForm from './scripts/contactForm.js';
import scrollAnimations from './scripts/scrollAnimations.js';
import animatedLetters from './scripts/animatedLetters.js';

window.addEventListener('scroll', stickyNavbar);
window.addEventListener('load', animatedCursor);
window.addEventListener('scroll', activeNavbarPage);
window.addEventListener('load', contactForm);
window.addEventListener('scroll', scrollAnimations);
animatedLetters();
