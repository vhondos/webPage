// // Purpose: Main JavaScript file for the project
// // Theme Toggle
// const themeToggle = document.querySelector('.theme-toggle');
// const body = document.body;
// const themeIcon = themeToggle.querySelector('i');

// themeToggle.addEventListener('click', () => {
//     const currentTheme = body.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     body.setAttribute('data-theme', newTheme);
//     themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
// });

// // Mobile Menu
// const menuBtn = document.querySelector('.mobile-menu-btn');
// const navMenu = document.querySelector('.nav__menu');

// menuBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('is-active');
// });

// // Close menu when clicking outside
// document.addEventListener('click', (e) => {
//     if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
//         navMenu.classList.remove('is-active');
//     }
// });

// // Close menu when clicking a link
// navMenu.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('is-active');
//     });
// });

// Scroll to Top
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTop.classList.add("is-visible");
  } else {
    scrollTop.classList.remove("is-visible");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
       

const displayMenu = (e) => {
  menu = document.getElementById("menuHamburguer")
  if(e){
    menu.classList.remove("sideBarInactive")
    menu.classList.add("sideBarActive")
    return
  }
  menu.classList.remove("sideBarActive")
  menu.classList.add("sideBarInactive")

}