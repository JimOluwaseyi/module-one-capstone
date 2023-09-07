const menuBtn = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.mobile-nav');
const cancel = document.querySelector('#cancel .fa-xmark');
const aboutBg = document.querySelector('.about-heading');

// -------------- Menu Bar --------------
menuBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  aboutBg.style.filter = 'blur(100px)';
});

cancel.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  aboutBg.style.filter = 'blur(0)';
});