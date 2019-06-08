// "myFunction" is a courtesy of w3schools
function myFunction() {
  "use strict"
  const responsiveNav = document.getElementById('myTopnav');
  if (responsiveNav.className === 'topnav') {
    responsiveNav.className += ' responsive';
  } else {
    responsiveNav.className = 'topnav';
  }
};

(function displayEvent() {
  const btnClose = document.querySelector('#close-btn');
  const btnOpen = document.querySelector('#display-btn');
  const hidden = document.querySelector('.hidden-div');
  btnOpen.addEventListener('click', () => {
    btnOpen.style.display = 'none';
    hidden.classList.add('open');
    btnClose.style.display = 'block';
  }, true)
  btnClose.addEventListener('click', () => {
    btnOpen.style.display = 'block';
    hidden.classList.remove('open');
    btnClose.style.display = 'none';
  }, true)
}());

// will trigger the actions on the menu
function responsive() {
  const nav = document.querySelectorAll('.nav-link');
  nav.forEach((btn) => {
    btn.addEventListener("click", () => {
      "use strict"
      myFunction();
    })
}, true);};

responsive();
