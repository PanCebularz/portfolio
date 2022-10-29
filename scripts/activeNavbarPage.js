export const activeNavbarPage = () => {
  const sections = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.nav-page');

  const changeLinkState = () => {
    let index = sections.length;

    while (
      --index &&
      window.scrollY + 200 < sections[index].offsetTop
    ) {}

    pages.forEach((el) => el.classList.remove('active'));
    pages[index].classList.add('active');
  };

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);
};

export default activeNavbarPage;
