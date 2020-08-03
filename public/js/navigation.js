function init() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuList = document.querySelector('.mobile-menu__list');
  const mobileLogo = document.querySelector('.mobile-menu__logo');

  // On menu click -- apply css classes to elements
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav__hamburger--close');
    mobileMenu.classList.toggle('mobile-menu--active');
    mobileMenuList.classList.toggle('mobile-menu__list--active');
    mobileLogo.classList.toggle('mobile-menu__logo--active');
  });
}

init();
