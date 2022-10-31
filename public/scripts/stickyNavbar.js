const stickyNavbar = () => {
  let _90vh = 90 * Math.round(window.innerHeight / 100);

  const navbar = document.querySelector('nav');
  const scroll = document.documentElement.scrollTop;

  if (window.innerWidth < 600) {
    navbar.style.position = 'fixed';
  }
  if (scroll > _90vh && window.innerWidth > 600) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

export default stickyNavbar;
