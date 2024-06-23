const hamburgerIcon = document.querySelector('.humburger-icon')
const closeIcon = document.querySelector('.close-icon')
const navMenu = document.querySelector('.header-content')
const navBar= document.querySelector("nav")

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
  navMenu.classList.add('menu-open')
})

closeIcon.addEventListener('click', (e) => {
  navMenu.classList.remove('menu-open')
})

window.addEventListener("click", ()=>{
    navMenu.classList.remove('menu-open');
})
navBar.addEventListener("click", (e)=>{
    e.stopPropagation();
})