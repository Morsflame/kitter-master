'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
// Function to open the search bar
function openSearch() {
  document.getElementById("search-bar").style.display = "block";
}

// Function to close the search bar
function closeSearch() {
  document.getElementById("search-bar").style.display = "none";
}

// Event listener to open the search bar when the button is clicked
document.getElementById("search-btn").addEventListener("click", openSearch);
// Function to open the login form
function openLoginForm() {
    document.getElementById("login-form").style.display = "block";
}

// Function to close the login form
function closeLoginForm() {
    document.getElementById("login-form").style.display = "none";
}

// Event listener to open the login form when the button is clicked
document.getElementById("login-btn").addEventListener("click", openLoginForm);
