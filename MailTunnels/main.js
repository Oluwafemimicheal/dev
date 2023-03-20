const menu = document.querySelector('.fa-bars')
const navbarToggle = document.querySelector('.navbar')
const header = document.querySelector('.header')

menu.addEventListener('click', () => {
    navbarToggle.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scroll', window.scrollY > 100)
})