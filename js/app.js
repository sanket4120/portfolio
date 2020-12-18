window.addEventListener('load', () => {
  const menu = document.getElementById('menu-open');
  const close = document.getElementById('menu-close');
  const mobileNav = document.querySelector('.mobile__links');
  menu.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  });
});
