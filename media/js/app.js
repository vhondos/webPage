const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

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