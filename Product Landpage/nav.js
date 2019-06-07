function myFunction() {
  "use strict"
  const responsiveNav = document.querySelector("#myTopnav");
  if (responsiveNav.className === "topnav") {
    responsiveNav.className += "responsive";
  } else {
    responsiveNav.className = "topnav";
  }
};

// will trigger the actions on the menu
function responsive() {
const nav = document.querySelectorAll(".nav-link");
nav.forEach(btn => {
  btn.addEventListener("click", () => {
    "user strict"
    const responsiveNav = document.getElementById("myTopnav");
    if (responsiveNav.className === "topnav") {
      responsiveNav.className += " responsive";
    } else {
      responsiveNav.className = "topnav";
    }
  })
}, true);};

responsive();
