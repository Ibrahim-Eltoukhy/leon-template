const menuIcon = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('#menu-container');
const linksEl = document.querySelector('.links');

linksEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-bars')) {
    menuContainer.style.opacity = 1;
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuContainer.style.opacity = 0;
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
});
