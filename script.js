const navToggle = document.querySelector('.nav-toggle');
const primaryMenu = document.querySelector('#primary-menu');

if (navToggle && primaryMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    primaryMenu.classList.toggle('open');
  });

  primaryMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryMenu.classList.remove('open');
    });
  });
}

const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}
