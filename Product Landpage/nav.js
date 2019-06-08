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

