const menuBtn = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.mobile-nav');
const cancel = document.querySelector('#cancel .fa-xmark');

// -------------- Menu Bar --------------
menuBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
});

cancel.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});